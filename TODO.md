# Responsive Home Page Task

## Steps:

1. **[COMPLETE]** Added mobile media query (`@media (max-width: 480px)`) to `src/pages/Home/Home.css`:
   - Title: 1.8rem font, margin 18vh 0 2vh.
   - Subtitle: 1.4rem, margin-bottom 6vh.
   - Button: 60px height, min(280px, 90vw) width, 1.2rem font.
   - Video: top -220px, height 170vh, object-fit: cover.

2. **[COMPLETE]** Added tablet media query (`@media (min-width: 481px) and (max-width: 1024px)`):
   - Title: 2.2rem, margin 25vh 0 2.5vh.
   - Subtitle: 1.8rem, margin-bottom 10vh.
   - Button: 80px height, min(350px, 80vw) width, 1.6rem font.
   - Video: top -280px, height 190vh.

3. **[COMPLETE]** Base enhancements:
   - Added text-shadow to .home**title and .home**subtitle for better contrast over video.
   - Added .home\_\_contact-link { display: block; }.
   - Added object-fit: cover to .home\_\_vid.

4. **[COMPLETE]** Verified CSS updates.

5. **[COMPLETE]** Mobile video rotation/fill optimized.

6. **[PENDING]** Test: `npm run dev`, DevTools mobile view confirm video fills screen rotated.
