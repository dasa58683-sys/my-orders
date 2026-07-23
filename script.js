// const tabs = document.querySelectorAll(".tab-btn");

// tabs.forEach((tab)=>{

//     tab.addEventListener("click",()=>{

//         tabs.forEach((btn)=>{

//             btn.classList.remove("active");

//         });

//         tab.classList.add("active");

//     });

// });

const tabs = document.querySelectorAll(".tab-btn");

const slider = document.querySelector(".tab-slider");


tabs.forEach((tab)=>{

    tab.addEventListener("click",()=>{

        // Active Class Remove
        tabs.forEach((btn)=>{

            btn.classList.remove("active");

        });

        // Add Active Class
        tab.classList.add("active");


        // Move Slider
       slider.style.left = `${tab.offsetLeft}px`;

       slider.style.width = `${tab.offsetWidth}px`;

    });

});


// Default Active Tab

const activeTab = document.querySelector(".tab-btn.active");

slider.style.width = `${activeTab.offsetWidth}px`;

slider.style.left = `${activeTab.offsetLeft}px`;