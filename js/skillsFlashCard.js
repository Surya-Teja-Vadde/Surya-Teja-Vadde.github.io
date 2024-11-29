document.querySelectorAll('.skill-box').forEach(skillBox => {
    const skills = skillBox.dataset.skills.split(', ');
    const flashCard = skillBox.querySelector('.skill-flash-card');
    let currentSkillIndex = 0;
  
    function showNextSkill() {
      flashCard.style.opacity = 0;
      flashCard.style.transform = 'translateX(100%)';
  
      setTimeout(() => {
        flashCard.textContent = skills[currentSkillIndex];
        flashCard.style.opacity = 1;
        flashCard.style.transform = 'translateX(0)';
  
        setTimeout(() => {
          flashCard.style.opacity = 0;
          flashCard.style.transform = 'translateX(-100%)';
  
          currentSkillIndex = (currentSkillIndex + 1) % skills.length;
          setTimeout(showNextSkill, 500);
        }, 1000);
      }, 500);
    }
  
    skillBox.addEventListener('mouseenter', showNextSkill);
  });
  