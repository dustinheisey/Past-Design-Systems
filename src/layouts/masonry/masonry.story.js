import { html } from "lit";

export default {
  title: "Layouts/Masonry",
};

export const Default = () =>
  html`
    <div class="masonry col-3">
      <div class="blog-post-teaser">
        <a href="{blog post link}">
          <img src="https://placehold.co/600x400" alt="{blog post title}" />
          <h3>{blog post title}</h3>
          <p>{blog post excerpt}</p>
        </a>
      </div>
      <div class="blog-post-teaser">
        <a href="{blog post link}">
          <img src="https://placehold.co/600x400" alt="{blog post title}" />
          <h3>{blog post title}</h3>
          <p>{blog post excerpt}</p>
        </a>
      </div>
      <div class="blog-post-teaser">
        <a href="{blog post link}">
          <img src="https://placehold.co/600x400" alt="{blog post title}" />
          <h3>{blog post title}</h3>
          <p>{blog post excerpt}</p>
        </a>
      </div>
      <div class="blog-post-teaser">
        <a href="{blog post link}">
          <img src="https://placehold.co/600x400" alt="{blog post title}" />
          <h3>{blog post title}</h3>
          <p>{blog post excerpt}</p>
        </a>
      </div>
      <div class="blog-post-teaser">
        <a href="{blog post link}">
          <img src="https://placehold.co/600x400" alt="{blog post title}" />
          <h3>{blog post title}</h3>
          <p>{blog post excerpt}</p>
        </a>
      </div>
      <div class="blog-post-teaser">
        <a href="{blog post link}">
          <img src="https://placehold.co/600x400" alt="{blog post title}" />
          <h3>{blog post title}</h3>
          <p>{blog post excerpt}</p>
        </a>
      </div>
    </div>
  `;
