export function renderAbout(about) {
  return ` <section class = "bio" id="bio">
        <h1>${about.name}</h1>
        <img
          class="img-class"
          src=${about.photo}
          alt=${about.alt}
        /> <hr>
        <p><strong>Major:</strong> ${about.major.join(" and ")}</p>
        <p> <strong>College:</strong> 
          <a href="${about.universityLink}" target="${
    about.universityTarget
  }">${about.university}</a>
        </p>
        <p>
          <strong><i class="fa-solid fa-phone"></i> Phone:</strong>
          <a href="tel:${about.tel}">${about.phone}</a>
        </p>
        <p>
          <strong><i class="fa-solid fa-envelope"></i> Email:</strong>
          <a href="mailto:${about.email}">${about.email}</a>
        </p><hr>
        <a id="about_description">Hello, my name is Andrew and I am a senior at Boston College studying marketing and computer science. I am looking to enter the video game industry as a software developer, and hopefully move in a more creative direction as my career progresses. I have always loved video games, and it would be selling them short to say they haven't had a big impact on my life. I believe that they have so much more to offer than many people give them credit for. On the one hand, games can be beautiful expressions of art functioning on a level of interactibility never seen before. While on the other hand, games can offer some of the most exciting experiences you'll ever have. Add on the fact that I have grown my relationships so much through gaming and you have the reason that I think video games are one of the most faceted forms of human expression. For all the beautiful games that have come out in the past, I think we've still barely scratched the surface of what they're capable of and I would consider it an honor to help discover what heights we can continue to push them to. </a>
      </section>
      `;
}

export function renderSelfDescription (about) {
  return `<section class="moreAboutMe"><h1>More About Me</h1><p>${about.self}</p></section>`;
}
