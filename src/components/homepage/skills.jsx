import React from "react";
import "./styles/skills.css";

const Skills = () => {
    const skills = [
        {
            category: "Programming Languages",
            items: [
                { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png" },
                { name: "Java", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" },
                { name: "C++", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png" },
                { name: "C", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" },
                { name: "SQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/2560px-Sql_data_base_with_logo.svg.png" },
            ],
        },
        {
            category: "Web and Core",
            items: [
                { name: "HTML5", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s" },
                { name: "CSS3", icon: "https://miro.medium.com/v2/resize:fit:300/1*Aenej4dxqEZ9j7zsI9pSnw.png" },
                { name: "JavaScript (ES6+)", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s" },
                { name: "Data Structures", icon: "https://deen3evddmddt.cloudfront.net/uploads/content-images/what-is-dsa.webp" },
                { name: "Machine Learning", icon: "https://bigblue.academy/images/image/blog/what-is-machine-learning-2023-beginners-guide/1-3cxboknql4qs-lryht3pqw.jpg" },
            ],
        },
        {
            category: "Databases",
            items: [
                { name: "MySQL", icon: "https://cdn.prod.website-files.com/61ddd0b42c51f89b7de1e910/6697e5d70e6b50dbe5bbe3dd_6697e36f9a2e61c3f9a3c850_SQL.jpeg" },
                { name: "PostgreSQL", icon: "https://www.fullstackpython.com/img/logos/postgresql.jpg" },
                { name: "MongoDB", icon: "https://studio3t.com/wp-content/uploads/2020/09/introduction-to-mongodb-1024x278.png" },
                
            ],
        },
        {
            category: "Frameworks",
            items: [
                
                { "name": "Spring Boot", "icon": "https://miro.medium.com/v2/resize:fit:600/1*gLBbycoPkt6wAPGTyDAbZQ.png" },
                { "name": "ReactJS", "icon": "https://miro.medium.com/v2/resize:fit:1000/1*Yafu7ihc1LFuP4azerAa4w.png" },
                { "name": "NodeJs", "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" },
                { "name": "Bootstrap", "icon": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
                { "name": "Ruby on Rails", "icon": "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg" }
                
                
            ],
        },
        {
            category: "Cloud",
            items: [
                { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/225px-Amazon_Web_Services_Logo.svg.png" },
                { name: "Docker", icon: "https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo-2017-present.jpg" },
                { name: "Kubernetes", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png" },
                { name: "Kafka", icon: "https://miro.medium.com/v2/resize:fit:702/1*c3iIcOrrffEf4ZJnD_vLOQ.png" },
                { name: "Redis", icon: "https://www.loginradius.com/blog/static/4eda1ce5a0f541d97fdf27cd88bf2a49/03979/index.png" },
                { name: "RabbitMq", icon: "https://www.meshiq.com/wp-content/uploads/rabbitmq.png" },
            ],
        },
        {
            category: "Tools & Applications",
            items: [
                { name: "Git", icon: "https://www.fullstackpython.com/img/logos/git.png" },
                { name: "Jira", icon: "https://www.vivantio.com/wp-content/uploads/2024-vivantio-integrations-cover-jira.png" },
                { name: "Postman", icon: "https://mms.businesswire.com/media/20230322005274/en/761650/23/postman-logo-vert-2018.jpg" },
                { name: "Linux", icon: "https://logos-world.net/wp-content/uploads/2020/09/Linux-Logo.png" },
            ],
        },
    ];

    return (
        <div className="skills">
            <h2 className="skills-title">Technical Skills</h2>
            <div className="skills-grid">
                {skills.map((skillCategory, index) => (
                    <div key={index} className="skills-card">
                        <h3 className="skills-category">{skillCategory.category}</h3>
                        <div className="skills-items">
                            {skillCategory.items.map((item, i) => (
                                <div key={i} className="skills-item">
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="skills-icon"
                                    />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
