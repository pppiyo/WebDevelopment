import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'

export const links = [
	{ id: nanoid(), href: '#home', text: 'home' },
	{ id: nanoid(), href: '#skills', text: 'skills' },
	{ id: nanoid(), href: '#about', text: 'about' },
	{ id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
	{
		id: nanoid(),
		title: 'HTML&CSS',
		icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
		text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
	},
	{
		id: nanoid(),
		title: 'Javascript',
		icon: <FaJs className="h-16 w-16 text-emerald-500" />,
		text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
	},
	{
		id: nanoid(),
		title: 'React',
		icon: <FaReact className="h-16 w-16 text-emerald-500" />,
		text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
	},
]

export const projects = [
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: '',
		github: '',
		title: 'Personal Website',
		text: 'Personal website built with React and Tailwind.',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
		// url: '',
		github: 'https://github.com/pppiyo/Yelp_Business_Search_Angular',
		title: 'Yelp Business Search (Angular Version)',
		text: 'Web App that allows users to search for Yelp business information. Built with Angular and Bootstrap. Featuring text auto-completion, location auto-detection, search results sorting, and reservation making functions.',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: '',
		github: 'https://github.com/pppiyo/Yelp_Business_Search_Vanilla_JS',
		title: 'Yelp Business Search (Javascript Version)',
		text: 'Web App that allows users to search for Yelp business information. Built with Javascript, HTML and CSS. Featuring text auto-completion, location auto-detection, search results sorting, and reservation making functions.',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: '',
		github: 'https://github.com/pppiyo/Yelp_Business_Review_iOS',
		title: 'Yelp Business Review (iOS Version)',
		text: 'Web App that allows users to search for Yelp business information. Built with Javascript, HTML and CSS. Featuring text auto-completion, location auto-detection, search results sorting, and reservation making functions.',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: '',
		github: 'https://github.com/rustinzhao/CS576-Project',
		title: 'Interactive Media Player',
		text: 'Interactive media player in Python that will automatically generate a table of content directing to the starting frames of different scenes/shots/subshots based on the analysis of video frames and audio characteristics.',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://play.unity.com/mg/other/mamachick_gold_build',
		github: 'https://github.com/pppiyo/MamaChick_v2.0',
		title: 'MamaChick: Platformer Game on Math',
		text: 'A platformer game focused on math puzzles, utilizing agile development and data-driven methodologies for efficient iteration and optimization.',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://www.youtube.com/watch?v=O88_ELuy9QU',
		github: 'https://github.com/pppiyo/STFPD',
		title: 'Steam Turbine Flow Path Design Software',
		text: 'User-friendly software specialized in steam turbine system scheme design based on the OOP paradigm and the MVC software architecture pattern using the Pascal language.',
	},
]
