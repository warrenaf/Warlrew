export default function renderIntro(about) {
  return `
      <h1 class="intro_h1">WELCOME!</h1>
              <a id="aboutBtn" class="intro_container"><strong>ABOUT</strong></a>
              <a id = "newsBtn" class="intro_container"><strong>NEWS</strong></a>
              <a id = "projectBtn" class="intro_container"><strong>PROJECTS</strong></a>
      <div class="link-tree"><table class = "links"><thead><tr><th>RESUME</th>
        <th>GITHUB</th>
        <th>LINKDIN</th></tr>
        </thead>
        <tbody>
        <tr>
        <td><a href="${about.resume}"
            ><i class="fa-solid fa-file"></i></a
          >
            </td>
            <td><a href="${about.git}"
            ><i class="fa-brands fa-github"></i></a
          >
            </td>
            <td><a href="${about.linkd}"
            ><i class="fa-brands fa-linkedin"></i></a
          ></td>
            <tr>
            </tbody></table></div>
  `;
}
