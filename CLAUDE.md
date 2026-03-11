# Editing Rules

## Section Labels and Headings

Every section uses a small-caps `section-label` above the main `h1` or `h2` heading. These two lines must always be **different text**. The label is a short descriptor or category; the heading is the actual title.

Good:
```html
<span class="section-label">What You Do</span>
<h2>Your Responsibilities</h2>
```

Bad (duplicated):
```html
<span class="section-label">Your Responsibilities</span>
<h2>Your Responsibilities</h2>
```
