import BannerTextComponent from "./BannerTextComponent";
import TableComponent from "./TableComponent";

function TextContainer() {
  let Data = [
    {
      id: "cde_langs",
      header_name: "Coding langueges",
      data: ["html", "css", "javascript"],
    },
    {
      id: "frm_libs",
      header_name: "Frameworks & Libraries",
      data: [
        "React.Js",
        "Bootstrap",
        "NodeJs",
        "Express",
        "Axios",
        "PostgreSQL",
      ],
    },
    {
      id: "tech_tools",
      header_name: "Technologies & Toolset",
      data: [
        "Visual Studio Code",
        "Git",
        "Figma",
        "Postman",
        "Heroku",
        "Trello",
        "Npm",
      ],
    },
  ];
  
  return (
    <div className="text-content-div">
      <BannerTextComponent/>
      <TableComponent data={Data} />
    </div>
  );
}

export default TextContainer;
