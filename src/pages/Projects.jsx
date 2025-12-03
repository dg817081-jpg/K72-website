import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

    const projects = [{
        image1: 'public/fonts/imgpro1.jpg',
        image2: 'public/fonts/imgpro2.jpg'
    }, {
        image1: 'public/fonts/imgpro3.jpg',
        image2: 'public/fonts/imgpro4.jpg'
    }, {
        image1: 'public/fonts/imgpro5.jpg',
        image2: 'public/fonts/imgpro6.jpg'
        
    }, {
        image1: 'public/fonts/imgpro7.jpg',
        image2: 'public/fonts/imgpro8.jpg'
    }, {
        image1: 'public/fonts/imgpro9.jpg',
        image2: 'public/fonts/imgpro10.jpg'
    }, {
        image1: 'public/fonts/imgpro11.jpg',
        image2: 'public/fonts/imgpro12.jpg'
    }, {
        image1: 'public/fonts/imgpro13.jpg',
        image2: 'public/fonts/imgpro14.jpg'
    }, {
        image1: 'public/fonts/imgpro15.jpg',
        image2: 'public/fonts/imgpro16.jpg'

    }]
    
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function () {
        gsap.from('.hero', {
            height: '150px',
            stagger: {
                amount: 0.6
            },
            scrollTrigger: {
                trigger: '.lol',
                start: 'top 90%',
                end: 'top -150%',
                scrub: true
            }
        })
    })

    return (
        <div className='lg:p-4 p-2 mb-[100vh]'>
            <div className=' pt-[45vh]'>
                <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
            </div>
            <div className='-lg:mt-20 lol'>
                {projects.map(function (elem, idx) {
                    return <div key={idx} className='hero w-full lg:h-[1050px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
                        <ProjectCard image1={elem.image1} image2={elem.image2} />
                    </div>
                })}

            </div>
        </div>
    )
}

export default Projects
