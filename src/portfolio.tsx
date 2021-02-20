import emoji from 'react-easy-emoji';

export const greeting = {
	username: '김병진',
	title: '저는 김병진입니다.',
	subTitle: emoji("하고 싶은 걸 만드는 개발자가 꿈입니다."),
	role: "Software Developer",
	resumeLink: process.env.PUBLIC_URL +"/Resume.pdf",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

// TODO : Velog 블로그 추가
export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/kbj2060?tab=repositories',
	blogger: 'https://byungjin-study.blogspot.com/',
	email: 'kbj2060@gmail.com',
	velog: 'https://velog.io/@kbj2060',
	facebook: 'Your facebook link',
	twitter: "Your twitter link",
	instagram: "Your instagram link",
	medium: 'Your medium link',
	stackoverflow: 'Your stackoverflow link'
};

// TODO : TS 와 Nestjs 추가할 것.
export const skills = {
	title: emoji("What I Can Do 👀"),
	subTitle: "",
	describeSkills: [
		emoji("✔ 최근 디자인과 성능 최적화에 관심이 많습니다."),
		emoji("✔ 파이썬 Keras를 이용한 머신 러닝 논문 구현."),
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-react", text: "React", proficiency: 60},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 50},
		{fontAwesome: "fab fa-python", text: "Python", proficiency: 60},
		{fontAwesome: "fab fa-android", text: "Android", proficiency: 40},
		{fontAwesome: "fab fa-node-js", text: "Node", proficiency: 40},
		{fontAwesome: "fas fa-wifi", text: "IoT", proficiency: 60},
	],
	view: true
};

export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "2020.08 ~ 2021.01",
			company: "우주[간이과세자]",
			role: "대표",
		}
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects "),
	view: true
}

export const projects = {
	title: emoji("Projects 🧾"),
	subTitle: "",
	lists: [
		{
			title: "스마트팜 웹 서비스",
			desc: "React, Nodejs 로 만든 웹으로 MQTT 통신을 통한 원격 기기 조종. 현재 스마트팜 공장에 사용 중.",
			url: "http://kbj2060.asuscomm.com:11000/무들로29"
		},
		{
			title: "농산물 유통 어플 서비스",
			desc: "Kotlin, Firebase 로 만든 어플로 농부와 소비자를 직접 연결하여 유통 마진을 없애고 " +
				"농산물의 단가를 적정가에 맞춰 농부의 수익 증대와 소비자의 효율적인 구매를 유도하고자 만든 서비스. 현재 베타 서비스 중.",
			url: "https://play.google.com/store/apps/details?id=com.plantpoint"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: false
};

// TODO : 명저 읽기 프로젝트 추가할 것.
export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "",
	lists: [
		{
			title: "Machine Learning",
			desc: "CS231n",
			img_url : "https://i.ytimg.com/vi/n7DNueHGkqE/maxresdefault.jpg",
			url: "https://byungjin-study.blogspot.com/2020/01/4.html"
		},
		{
			title: "SmartFarm Beta in home",
			desc: "집에서 자동화 수경재배로 식물 키우기.",
			img_url : "https://3.bp.blogspot.com/-uGbC6OVmS-M/XhwtsnDq2_I/AAAAAAAAK8k/VP_mQz15kKgYp-bcyYIZzWNoD8KfUbcwwCK4BGAYYCw/s400/KakaoTalk_20200113_174240851.jpg",
			url: "https://byungjin-study.blogspot.com/2020/01/5-1.html"
		},
	],
	view: true
}

export const contactInfo = {
	title: "Contact",
	subTitle: "",
	introduce: emoji("📞 010-7173-2066"),
	email: emoji("📧 kbj2060@gmail.com"),
	view: true
}