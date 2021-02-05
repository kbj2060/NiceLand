import emoji from 'react-easy-emoji';

export const greeting = {
	username: '김병진',
	title: '저는 김병진입니다.',
	subTitle: emoji("하고 싶은 걸 만드는 개발자가 꿈입니다."),
	role: "Frontend Engineer",
	resumeLink: "https://github.com/kbj2060?tab=repositories",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/kbj2060?tab=repositories',
	blogger: 'https://byungjin-study.blogspot.com/',
	email: 'kbj2060@gmail.com',
	facebook: 'Your facebook link',
	twitter: "Your twitter link",
	instagram: "Your instagram link",
	medium: 'Your medium link',
	stackoverflow: 'Your stackoverflow link'
};

export const skills = {
	title: emoji("What I Can Do 👀"),
	subTitle: "",
	describeSkills: [
		emoji("✔ React, Redux 를 통한 프론트엔드 개발 경험"),
		emoji("✔ Nodejs, Express 를 통한 백엔드 개발 경험"),
		emoji("✔ Kotlin, Firebase 를 이용한 안드로이드 개발 경험"),
		emoji("✔ MQTT, Mini PC 를 이용한 IoT 소프트웨어 개발 경험"),
		emoji("✔ 최근 성능 최적화에 관심이 많습니다."),
		emoji("✔ 위 경험은 본인을 위한 프로젝트 경험으로 작성되었습니다."),
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
	subTitle: "subtitle for projects",
	lists: [
		{
			title: "스마트팜 웹 서비스",
			desc: "React, Nodejs 로 만든 웹으로 MQTT 통신을 통한 원격 기기 조종. 현재 스마트팜 공장에 사용 중.",
			url: "http://kbj2060.asuscomm.com:11000/무들로29"
		},
		{
			title: "농산물 유통 어플 서비스",
			desc: "Kotlin, Firebase 로 만든 어플로 농부와 소비자를 직접 연결하여 유통 마진을 없애고 " +
				"농산물의 단가를 적정가에 맞춰 농부의 수익 증대와 소비자의 효율적인 구매를 유도하고자 만든 서비스.",
			url: "#"
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

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: false
}

export const contactInfo = {
	title: "Contact",
	subTitle: "",
	introduce: emoji("📞 010-7173-2066"),
	email: emoji("📧 kbj2060@gmail.com"),
	view: true
}