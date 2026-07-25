r"""Auto-generate a game trailer from gameplay captures.

Usage:
    .venv\Scripts\python docs\make_trailer.py

Looks for today's captures in ~/Videos/Captures by default.
Outputs trailer.mp4 in current directory.
"""

import argparse
import os
from datetime import datetime
from pathlib import Path

from moviepy import (
    VideoFileClip,
    concatenate_videoclips,
    TextClip,
    CompositeVideoClip,
    AudioFileClip,
    vfx,
)

CAPTURES_DIR = Path(os.environ["USERPROFILE"]) / "Videos" / "Captures"
CLIP_DURATION = 6
TRAILER_DURATION = 45
FADE_DURATION = 0.5

FONT_PATH = Path(os.environ["WINDIR"]) / "Fonts" / "Arial.ttf"
FONT_BOLD_PATH = Path(os.environ["WINDIR"]) / "Fonts" / "Arialbd.ttf"


def find_videos(input_dir: Path, date_filter: str | None = None) -> list[Path]:
    videos = sorted(input_dir.glob("*.mp4"))
    if date_filter:
        videos = [v for v in videos if date_filter in v.stem]
    return videos


def main():
    parser = argparse.ArgumentParser(description="Generate game trailer from captures")
    parser.add_argument(
        "--input",
        type=str,
        default=str(CAPTURES_DIR),
        help="Directory containing video captures",
    )
    parser.add_argument(
        "--date",
        type=str,
        default=datetime.now().strftime("%Y-%m-%d"),
        help="Filter videos by date string (default: today)",
    )
    parser.add_argument(
        "--music",
        type=str,
        default=None,
        help="Path to background music file (optional)",
    )
    parser.add_argument(
        "--output",
        type=str,
        default="trailer.mp4",
        help="Output filename (default: trailer.mp4)",
    )
    parser.add_argument(
        "--clip-duration",
        type=int,
        default=CLIP_DURATION,
        help=f"Duration of each clip segment in seconds (default: {CLIP_DURATION})",
    )
    parser.add_argument(
        "--max-duration",
        type=int,
        default=TRAILER_DURATION,
        help=f"Maximum trailer duration in seconds (default: {TRAILER_DURATION})",
    )
    args = parser.parse_args()

    input_dir = Path(args.input)
    if not input_dir.exists():
        print(f"Input directory not found: {input_dir}")
        return

    videos = find_videos(input_dir, args.date)
    if not videos:
        videos = find_videos(input_dir, None)
        if not videos:
            print(f"No .mp4 files found in {input_dir}")
            return

    print(f"Found {len(videos)} video(s):")
    for v in videos:
        print(f"  {v.name}")

    source_clips = []
    for vpath in videos:
        source_clips.append(VideoFileClip(str(vpath)))

    segments = []
    total = 0
    for clip in source_clips:
        dur = clip.duration
        pos = 0
        while pos < dur and total < args.max_duration:
            seg_end = min(pos + args.clip_duration, dur)
            seg = clip.subclipped(pos, seg_end)
            if len(segments) > 0:
                seg = seg.with_effects([vfx.CrossFadeIn(FADE_DURATION)])
            segments.append(seg)
            total += seg.duration
            pos += args.clip_duration

    if not segments:
        for c in source_clips:
            c.close()
        print("No clips generated")
        return

    final = concatenate_videoclips(segments)
    if final.duration > args.max_duration:
        final = final.subclipped(0, args.max_duration)

    font_path = str(FONT_BOLD_PATH) if FONT_BOLD_PATH.exists() else str(FONT_PATH)

    # Title card
    title = (
        TextClip(
            text="Bee Killings Inn",
            font_size=72,
            color="white",
            stroke_color="black",
            stroke_width=3,
            font=font_path,
            duration=3,
        )
        .with_position("center")
        .with_start(1)
    )
    subtitle = (
        TextClip(
            text="Coming Soon",
            font_size=48,
            color="#d97706",
            stroke_color="black",
            stroke_width=2,
            font=font_path,
            duration=2,
        )
        .with_position(("center", "center"))
        .with_start(3)
    )

    # End card
    end_card = (
        TextClip(
            text="Wishlist on Steam Now",
            font_size=56,
            color="white",
            stroke_color="black",
            stroke_width=3,
            font=font_path,
            duration=3,
        )
        .with_position("center")
        .with_start(final.duration - 3)
    )

    overlay = CompositeVideoClip([final, title, subtitle, end_card], size=final.size)

    # Optional background music
    if args.music and os.path.exists(args.music):
        music = AudioFileClip(args.music).with_duration(overlay.duration)
        music = music.with_effects([vfx.MultiplyVolume(0.3)])
        overlay = overlay.with_audio(music)

    output_path = Path(args.output)
    print(f"Rendering trailer ({overlay.duration:.0f}s) to {output_path}...")
    overlay.write_videofile(
        str(output_path),
        codec="libx264",
        audio_codec="aac",
        fps=30,
        preset="medium",
    )

    overlay.close()
    final.close()
    for s in segments:
        s.close()
    for c in source_clips:
        c.close()
    print(f"Done! Trailer saved to {output_path}")


if __name__ == "__main__":
    main()
