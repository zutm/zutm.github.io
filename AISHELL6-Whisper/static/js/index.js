var isCNSamplesVisible = false; // Tracks if samples are currently visible

function toggleSamples() {
    // Get all elements with class 'more-samples'
    var samples = document.getElementsByClassName('more-samples');

    // If samples are currently visible, hide them
    if (isCNSamplesVisible) {
        for (var i = 0; i < samples.length; i++) {
            samples[i].style.display = 'none';
        }
        document.getElementsByClassName('toggle-samples-button')[0].innerHTML = '<i class="fas fa-plus fa-fw"></i>More Samples';
        isCNSamplesVisible = false;
    }
    // If samples are currently hidden, show them
    else {
        for (var i = 0; i < samples.length; i++) {
            samples[i].style.display = 'block';
        }
        document.getElementsByClassName('toggle-samples-button')[0].innerHTML = '<i class="fas fa-chevron-up fa-fw"></i>Hide Samples';
        isCNSamplesVisible = true;
    }
}

var isENSamplesVisible = false; // Tracks if samples are currently visible

function toggleENSamples() {
    // Get all elements with class 'more-ensamples'
    var samples = document.getElementsByClassName('more-ensamples');

    // If samples are currently visible, hide them
    if (isENSamplesVisible) {
        for (var i = 0; i < samples.length; i++) {
            samples[i].style.display = 'none';
        }
        document.getElementsByClassName('toggle-ensamples-button')[0].innerHTML = '<i class="fas fa-plus fa-fw"></i>More Samples';
        isENSamplesVisible = false;
    }
    // If samples are currently hidden, show them
    else {
        for (var i = 0; i < samples.length; i++) {
            samples[i].style.display = 'block';
        }
        document.getElementsByClassName('toggle-ensamples-button')[0].innerHTML = '<i class="fas fa-chevron-up fa-fw"></i>Hide Samples';
        isENSamplesVisible = true;
    }
}
var isENSamplesVisible = false; // Tracks if samples are currently visible

function toggleMIXSamples() {
    // Get all elements with class 'more-mixsamples'
    var samples = document.getElementsByClassName('more-ensamples');

    // If samples are currently visible, hide them
    if (isMIXSamplesVisible) {
        for (var i = 0; i < samples.length; i++) {
            samples[i].style.display = 'none';
        }
        document.getElementsByClassName('toggle-ensamples-button')[0].innerHTML = '<i class="fas fa-plus fa-fw"></i>More Samples';
        isMIXSamplesVisible = false;
    }
    // If samples are currently hidden, show them
    else {
        for (var i = 0; i < samples.length; i++) {
            samples[i].style.display = 'block';
        }
        document.getElementsByClassName('toggle-ensamples-button')[0].innerHTML = '<i class="fas fa-chevron-up fa-fw"></i>Hide Samples';
        isMIXSamplesVisible = true;
    }
}

var isMIXSamplesVisible = false; // Tracks if samples are currently visible

function toggleMIXSamples() {
    // Get all elements with class 'more-mixsamples'
    var samples = document.getElementsByClassName('more-mixsamples');

    // If samples are currently visible, hide them
    if (isMIXSamplesVisible) {
        for (var i = 0; i < samples.length; i++) {
            samples[i].style.display = 'none';
        }
        document.getElementsByClassName('toggle-mixsamples-button')[0].innerHTML = '<i class="fas fa-plus fa-fw"></i>More Samples';
        isMIXSamplesVisible = false;
    }
    // If samples are currently hidden, show them
    else {
        for (var i = 0; i < samples.length; i++) {
            samples[i].style.display = 'block';
        }
        document.getElementsByClassName('toggle-mixsamples-button')[0].innerHTML = '<i class="fas fa-chevron-up fa-fw"></i>Hide Samples';
        isMIXSamplesVisible = true;
    }
}


// 获取所有章节标题和目录索引项  
const sections = document.querySelectorAll('#content h2');
const tocItems = document.querySelectorAll('#toc li a');

function getOffsetTop(element) {  
    let offsetTop = 0;  
    while (element) {  
        offsetTop += element.offsetTop;  
        element = element.offsetParent;  
    }  
    return offsetTop;  
};

// 初始化当前活动的索引项  
let currentActiveIndex = 0;

// 监听滚动事件  
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

    // 遍历所有章节，找出当前活动的章节  
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        // const sectionTop = section.offsetTop;
        const sectionTop = getOffsetTop(section)

        // 检查章节是否在视口内  
        if (scrollPosition >= sectionTop && (i === sections.length - 1 || scrollPosition < getOffsetTop(sections[i + 1]))) {
            // 更新活动的索引项  
            updateActiveIndex(i);
            break;
        }
    }
});

// 更新活动的索引项  
function updateActiveIndex(index) {
    // 移除之前活动的索引项的高亮  
    tocItems[currentActiveIndex].classList.remove('active');

    // 更新当前活动的索引项  
    currentActiveIndex = index;

    // 添加新的活动的索引项的高亮  
    tocItems[currentActiveIndex].classList.add('active');
}

// 页面加载时，设置第一个章节为活动章节  
window.addEventListener('DOMContentLoaded', () => {
    updateActiveIndex(0);
});


function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    // 更新进度条  
    document.getElementById("verticalProgressBar").style.height = (winScroll / height) * 100 + "%";

    // 根据滚动位置更新章节高亮  
    var sections = document.querySelectorAll("#toc ul li a");
    sections.forEach((section, index) => {
        const sectionTop = document.querySelector(`#${section.getAttribute('href').substr(1)}`).offsetTop;
        if (winScroll >= sectionTop && (index === 0 || winScroll < document.querySelector(`#${sections[index - 1].getAttribute('href').substr(1)}`).offsetTop)) {
            currentSection = index + 1;
            highlightSection(currentSection);
        }
    });

    // 显示或隐藏返回顶部的按钮  
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (winScroll > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}