# Images: public/ or src/?

Vite gives us some options:
- Can **import images with absolute paths**
    - Will use files in `public/`
    - Filenames **not cache-busted** when built
    - Use for images that won't/can't change
- Can **import images with relative paths**
    - Will use files in `src/`
    - Filenames **are cache-busted** when built
    - Use for images that MAY change (most)

