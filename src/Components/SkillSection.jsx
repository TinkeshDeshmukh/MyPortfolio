import React, { act, useState } from 'react'
import { cn } from "../lib/utils";
const Skills=[
    // Forntend Skills
    {name:"HTML/CSS", level:"95", category:"Frontend"},
    {name:"JavaScript", level:"90", category:"Frontend"},
    {name:"React", level:"85", category:"Frontend"},
    {name:"Next.js", level:"75", category:"Frontend"},
    {name:"Tailwind CSS", level:"90", category:"Frontend"},
    {name:"Bootstrap", level:"85", category:"Frontend"},

    // Backend Skills 
    {name:"Node.js", level:"80", category:"Backend"},
    {name:"Express", level:"75", category:"Backend"},
    {name:"MongoDB", level:"70", category:"Backend"},

    // Programming Languages
    {name:"JavaScript", level:"90", category:"Programming Languages"},
    {name:"Python", level:"80", category:"Programming Languages"},
    {name:"Java", level:"90", category:"Programming Languages"},
    {name:"C", level:"60", category:"Programming Languages"},

    // Data Analytics
    {name:"Python", level:"80", category:"Data Analytics"},
    {name:"Pandas", level:"75", category:"Data Analytics"},
    {name:"NumPy", level:"70", category:"Data Analytics"},
    {name:"Matplotlib", level:"65", category:"Data Analytics"},
    {name:"Seaborn", level:"60", category:"Data Analytics"},
    {name:"Data Visualization", level:"80", category:"Data Analytics"},


    // Other Skills and Tools
    {name:"Git/GitHub", level:"85", category:"tools"},
    {name:"vs Code", level:"90", category:"tools"},
    {name:"Intellij", level:"90", category:"tools"},
    {name:"Pycharm", level:"90", category:"tools"},
]
const categories=["All", "Frontend", "Backend", "Programming Languages", "Data Analytics", "tools"];

const SkillSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
const filteredSkills=Skills.filter((skill)=>activeCategory==="All" ||skill.category===activeCategory);

// Add a state to trigger animation on category/filter change
const [animateKey, setAnimateKey] = useState(0);

React.useEffect(() => {
    setAnimateKey(prev => prev + 1);
}, [activeCategory]);

return (
    <section className='py-24 px-4 relative bg-secondary/30 ' id='skills'>
        <div className='max-w-5xl mx-auto container '>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                My <span className='text-primary'>Skills</span>
            </h2>
            <div className=' flex flex-wrap justify-center gap-4 mb-12'>
                {categories.map((category, key) => (
                    <button
                        key={key}
                        className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondar/50"
                        )}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {filteredSkills.map((skill, key) => (
                    <div key={key} className='bg-card p-6 roounded-md shadow-xs hover:card-hover'>
                        <div className='text-left mb-4'>
                            <h3 className='font-semibold text-lg'>{skill.name}</h3>
                        </div>
                        <div className='w-full bg-secondary/50 rounded-md overflow-hidden '>
                            <div
                                key={animateKey + '-' + key}
                                className='bg-primary h-2 rounded-full origin-left transition-all duration-1000'
                                style={{ width: 0, animation: `growBar${key} 1.5s ease-out forwards` }}
                            />
                            <style>
                                {`
                                    @keyframes growBar${key} {
                                        from { width: 0; }
                                        to { width: ${skill.level}%; }
                                    }
                                `}
                            </style>
                            <div className='text-right mt-1'>
                                <span className='text-sm text-muted-foreground'>{skill.level + "%"}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)
}

export default SkillSection
