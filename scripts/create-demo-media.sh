#!/bin/sh
# Original geometric demo assets. Requires ffmpeg with libx264.
set -eu
cd "$(dirname "$0")/.."
mkdir -p src/assets public/media
FILTER="drawbox=x=0:y=480:w=1280:h=240:color=0xe9e6db:t=fill,drawbox=x=730:y=150:w=270:h=330:color=0xb77858:t=fill,geq=r='if(lt(hypot(X-420,Y-310),155),139,r(X,Y))':g='if(lt(hypot(X-420,Y-310),155),151,g(X,Y))':b='if(lt(hypot(X-420,Y-310),155),109,b(X,Y))',drawbox=x=160:y=570:w=960:h=2:color=0xc3c5b4:t=fill,drawbox=x=160:y=600:w=960:h=2:color=0xc3c5b4:t=fill"
ffmpeg -hide_banner -loglevel error -y -f lavfi -i 'color=c=0xf3f0e5:s=1280x720:r=24' -vf "$FILTER" -frames:v 1 -threads 1 src/assets/light-study.png
ffmpeg -hide_banner -loglevel error -y -loop 1 -i src/assets/light-study.png -f lavfi -i 'color=c=0x343a30:s=46x46:r=24' -filter_complex "[0:v][1:v]overlay=x='160+152*t':y=540:shortest=1" -t 6 -r 24 -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an public/media/light-study.mp4
ffmpeg -hide_banner -loglevel error -y -i public/media/light-study.mp4 -frames:v 1 public/media/light-study-poster.jpg
