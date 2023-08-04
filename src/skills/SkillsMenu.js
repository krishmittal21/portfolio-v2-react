import "../styles/skillsMenu.css"
const SkillSection=()=>{
    const halfLength = Math.ceil(skills.length / 2);
    const leftSkills = skills.slice(0, halfLength);
    const rightSkills = skills.slice(halfLength);
    
    return(
        <section className="mt-10" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="mt-10 md:mt-20 h-[calc(100vh-30vh)] no-scrollbar overflow-y-scroll scrollbar-hidden">
            <div className=" mt-10 flex flex-col md:flex-row ">
                <div className="w-full md:w-1/2 md:mr-20 ">
                {leftSkills.map((skill,index) => (
                    <div className="w-full md:w-64  " key={index}>
                    <h3 className="text-md mt-10 font-burtons font-bold py-2 text text-white">
                        {skill.title}
                    </h3>
                    <div className="h-6 w-full bg-gray-100 rounded-full mt-2">
                        <div className="h-full bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full " style={{ width: `${skill.level}%` }}/>
                    </div>
                    </div>
                ))}
                </div>
                <div className="w-full md:w-64 md:ml-20">
                {rightSkills.map((skill,index) => (
                    <div className="w-full md:w-64 mb-10" key={index}>
                    <h3 className="text-md mt-10 font-burtons  font-bold py-2 text text-white">
                        {skill.title}
                    </h3>
                    <div className="h-6 w-full bg-gray-100 rounded-full mt-2">
                        <div className="h-full bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full " style={{ width: `${skill.level}%` }}/>
                    </div>
                    </div>
                ))}
                </div>
                </div>
            </div>
            
        </section>
    )
}
export default SkillSection;
const skills = [
    {
        title: "ORACLE OCI Cloud",
        level: 85,
    },
    {
        title: "AWS Cloud",
        level: 75,
    },
    {
        title: "Quantum Computing",
        level: 75,
    },
    {
        title: "Python",
        level: 90,
    },
    {
        title: "Javascript",
        level: 80,
    },
    {
        title: "Typescript",
        level: 50,
    },
    {
        title: "Flutter/Dart",
        level: 40,
    },
    {
        title: "Tailwind CSS",
        level: 70,
    },
    {
        title: "ReactJS",
        level: 80,
    },
    {
        title: "NextJS",
        level: 80,
    },
    {
        title: "ThreeJS",
        level: 50,
    },
    {
        title: "NodeJS",
        level: 70,
    },
    {
        title: "Strapi",
        level: 90,
    },
    {
        title: "Windows",
        level: 100,
    },
    {
        title: "Linux",
        level: 70,
    },
    {
        title: "Git/ Github",
        level: 100,
    },
    {
        title: "Object-Oriented Programming ",
        level: 90,
    },
    {
        title: "Hindi",
        level: 100,
    },
    {
        title: "English",
        level: 100,
    },
    {
        title: "Italian",
        level: 10,
    },
    
    
];