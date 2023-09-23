



function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
        photo.src = profileData.photo
        photo.alt = profileData.name

    const name = document.getElementById('profile.name')
        name.innerText = profileData.name

    const job = document.getElementById('profile.job')
        job.innerText = profileData.job

    const location = document.getElementById('profile.location')
        location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
        phone.innerText = profileData.phone
        phone.href = `tel:${profileData.email}`
    
    const email = document.getElementById('profile.email')
        email.innerText = profileData.email
        email.href = `mailto:${profileData.email}`

}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skills => `<li><img src="${skills.logo}" alt="${skills.name}"></li>`).join('')
}

function updateLanguajes(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {

    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => `
<li>
    <h3 ${project.github ? 'class="github"': ''}>
        ${project.name}
    </h3>
    <a href="${project.url}" target="_blank">
        ${project.url}
    </a>
</li>`).join('')
}

function updateExperience(profileData) {
    const experience = document.getElementById('professionalExperience')
    experience.innerHTML = profileData.professionalExperience.map(experience => `
<li>
    <h3 class="title" id="profile.experience.name">
        ${experience.name}
    </h3>
    <span class="period" id="profile.experience.period">
        ${experience.period}
    </span>
    <p id="profile.experience.description">
          ${experience.description}  
    </p>
</li>`).join('')
}




(async () => {

    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguajes(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
})()
