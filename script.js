document.addEventListener('DOMContentLoaded', () => {
    // 加载页面时的动画效果
    setTimeout(() => {
        document.querySelector('.loader').style.opacity = '0';
        document.querySelector('.loader').style.visibility = 'hidden';
    }, 2000);

    // 粒子背景效果
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#6c63ff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#6c63ff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // 导航栏滚动效果
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // 汉堡菜单点击效果
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // 当菜单展开时防止背景滚动
            if (hamburger.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // 导航链接点击效果
    const navLink = document.querySelectorAll('.nav-link');
    navLink.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = ''; // 恢复滚动
            
            // 添加平滑滚动和适当的延迟，确保菜单闭合后再滚动
            const href = link.getAttribute('href');
            const targetElement = document.querySelector(href);
            if (targetElement) {
                setTimeout(() => {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }, 300);
                return false;
            }
        });
    });

    // 打字机效果
    const typedText = document.getElementById('typed-text');
    if (typedText) {
        const phrases = ["前端开发者", "创意设计师", "问题解决者", "终身学习者"];
        let currentPhrase = 0;
        let letterIndex = 0;
        let isDeleting = false;
        let typeSpeed = 150;

        function type() {
            const current = currentPhrase % phrases.length;
            const fullText = phrases[current];

            if (isDeleting) {
                typedText.textContent = fullText.substring(0, letterIndex - 1);
                letterIndex--;
                typeSpeed = 50;
            } else {
                typedText.textContent = fullText.substring(0, letterIndex + 1);
                letterIndex++;
                typeSpeed = 150;
            }

            if (!isDeleting && letterIndex === fullText.length) {
                typeSpeed = 2000; // 等待时间
                isDeleting = true;
            } else if (isDeleting && letterIndex === 0) {
                isDeleting = false;
                currentPhrase++;
                typeSpeed = 500; // 等待时间
            }

            setTimeout(type, typeSpeed);
        }
        
        type();
    }

    // GSAP 动画效果
    if (typeof gsap !== 'undefined') {
        // 首屏动画
        gsap.from('.hero-content h1', { 
            duration: 1, 
            opacity: 0, 
            y: 50, 
            delay: 0.5 
        });
        gsap.from('.hero-description', { 
            duration: 1, 
            opacity: 0, 
            y: 30, 
            delay: 0.8 
        });
        gsap.from('.cta-buttons', { 
            duration: 1, 
            opacity: 0, 
            y: 30, 
            delay: 1.1,
            stagger: 0.2
        });
        gsap.from('.hero-image', { 
            duration: 1.5, 
            opacity: 0, 
            x: 50, 
            delay: 0.5 
        });
        gsap.from('.scroll-indicator', { 
            duration: 1, 
            opacity: 0, 
            y: -30, 
            delay: 2 
        });

        // 滚动触发动画
        const sections = document.querySelectorAll('section:not(.hero)');
        sections.forEach(section => {
            gsap.from(section.querySelector('.section-title'), {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%"
                },
                duration: 0.8,
                opacity: 0,
                y: 30
            });
            
            gsap.from(section.querySelector('.section-underline'), {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%"
                },
                duration: 0.8,
                opacity: 0,
                width: 0,
                delay: 0.3
            });
            
            if (section.classList.contains('skills')) {
                gsap.from('.skill-item', {
                    scrollTrigger: {
                        trigger: '.skills',
                        start: "top 70%"
                    },
                    duration: 0.8,
                    opacity: 0,
                    y: 30,
                    stagger: 0.1
                });
            }
            
            if (section.classList.contains('projects')) {
                gsap.from('.project-card', {
                    scrollTrigger: {
                        trigger: '.projects',
                        start: "top 70%"
                    },
                    duration: 0.8,
                    opacity: 0,
                    y: 50,
                    stagger: 0.1
                });
            }
        });
    }

    // 项目过滤器
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的 active 类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的 active 类
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 回到顶部按钮
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 为技能进度条添加动画
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        const skillBars = document.querySelectorAll('.skill-progress');
        let animated = false;
        
        function animateSkills() {
            if (window.scrollY > skillsSection.offsetTop - window.innerHeight * 0.7 && !animated) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                animated = true;
            }
        }
        
        window.addEventListener('scroll', animateSkills);
        // 初始检查
        animateSkills();
    }

    // 增强3D魔方交互
    const cubeWrapper = document.querySelector('.cube-wrapper');
    const cube = document.querySelector('.cube');
    const cubeFaces = document.querySelectorAll('.cube-face');
    
    if (cube && cubeWrapper) {
        // 初始化变量
        let autoRotate = true;
        let rotateX = 0;
        let rotateY = 0;
        let rotateZ = 0;
        let lastX;
        let lastY;
        let isDragging = false;
        let autoRotateInterval;
        let universeCreated = false;
        let isExpanded = false; // 跟踪魔方是否处于展开状态
        
        // 更新魔方旋转
        function updateCubeRotation() {
            cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
        }
        
        // 自动旋转函数
        function startAutoRotate() {
            autoRotateInterval = setInterval(() => {
                if (autoRotate) {
                    rotateY += 0.5;
                    rotateX += 0.2;
                    updateCubeRotation();
                }
            }, 30);
        }
        
        startAutoRotate();
        
        // 切换魔方展开/收起状态
        function toggleCubeExpansion() {
            if (isExpanded) {
                // 收起魔方
                cubeWrapper.classList.remove('expanded');
                cube.classList.remove('expanded');
                
                // 恢复自动旋转
                setTimeout(() => {
                    autoRotate = true;
                }, 1000);
            } else {
                // 展开魔方
                cubeWrapper.classList.add('expanded');
                cube.classList.add('expanded');
                
                // 暂停自动旋转
                autoRotate = false;
                
                // 创建小宇宙
                createUniverse();
            }
            
            isExpanded = !isExpanded; // 切换状态
        }
        
        // 小宇宙效果
        const universeContainer = document.getElementById('universe-container');
        let universeScene, universeCamera, universeRenderer;
        let stars = [];
        let planets = [];
        
        // 创建宇宙场景
        function createUniverse() {
            if (universeCreated) return;
            
            // 创建场景
            universeScene = new THREE.Scene();
            
            // 创建相机
            universeCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            universeCamera.position.z = 30;
            
            // 创建渲染器
            universeRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            universeRenderer.setSize(universeContainer.clientWidth, universeContainer.clientHeight);
            universeRenderer.setClearColor(0x000000, 0.9);
            universeContainer.appendChild(universeRenderer.domElement);
            
            // 添加环境光
            const ambientLight = new THREE.AmbientLight(0x555555);
            universeScene.add(ambientLight);
            
            // 添加点光源
            const pointLight = new THREE.PointLight(0xffffff, 1, 100);
            pointLight.position.set(0, 0, 0);
            universeScene.add(pointLight);
            
            // 创建星空背景
            createStarfield();
            
            // 创建行星系统
            createSolarSystem();
            
            // 渲染宇宙场景
            animateUniverse();
            
            universeCreated = true;
        }
        
        // 创建星空
        function createStarfield() {
            // 创建星星
            const starGeometry = new THREE.SphereGeometry(0.1, 8, 8);
            const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
            
            for (let i = 0; i < 200; i++) {
                const star = new THREE.Mesh(starGeometry, starMaterial);
                
                // 随机位置
                star.position.x = Math.random() * 60 - 30;
                star.position.y = Math.random() * 60 - 30;
                star.position.z = Math.random() * 60 - 30;
                
                // 确保星星不在中央
                if (
                    Math.abs(star.position.x) < 5 && 
                    Math.abs(star.position.y) < 5 && 
                    Math.abs(star.position.z) < 5
                ) {
                    star.position.x *= 2;
                    star.position.y *= 2;
                    star.position.z *= 2;
                }
                
                star.scale.set(
                    Math.random() * 2 + 0.5,
                    Math.random() * 2 + 0.5,
                    Math.random() * 2 + 0.5
                );
                
                universeScene.add(star);
                stars.push(star);
                
                // 添加星星闪烁动画
                star.userData = {
                    rotationSpeed: Math.random() * 0.01,
                    pulseSpeed: Math.random() * 0.01,
                    pulseOffset: Math.random() * Math.PI * 2
                };
            }
        }
        
        // 创建行星系统
        function createSolarSystem() {
            // 创建太阳
            const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
            const sunMaterial = new THREE.MeshBasicMaterial({ 
                color: 0xff9933,
                emissive: 0xff9933,
                emissiveIntensity: 1
            });
            const sun = new THREE.Mesh(sunGeometry, sunMaterial);
            sun.position.set(0, 0, 0);
            universeScene.add(sun);
            
            // 太阳光环
            const sunHaloGeometry = new THREE.RingGeometry(2.2, 4, 32);
            const sunHaloMaterial = new THREE.MeshBasicMaterial({
                color: 0xff9933,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.3
            });
            const sunHalo = new THREE.Mesh(sunHaloGeometry, sunHaloMaterial);
            sunHalo.rotation.x = Math.PI / 2;
            sun.add(sunHalo);
            
            // 创建行星
            const planetColors = [0x33ccff, 0x66cc00, 0xcc3300, 0x9966ff];
            const planetSizes = [0.8, 1.2, 0.9, 1.1];
            const orbitRadii = [6, 10, 14, 18];
            const orbitSpeeds = [0.02, 0.015, 0.01, 0.005];
            
            for (let i = 0; i < 4; i++) {
                // 行星几何体和材质
                const planetGeometry = new THREE.SphereGeometry(planetSizes[i], 32, 32);
                const planetMaterial = new THREE.MeshPhongMaterial({ 
                    color: planetColors[i],
                    shininess: 30,
                    emissive: 0x222222
                });
                
                // 创建行星
                const planet = new THREE.Mesh(planetGeometry, planetMaterial);
                
                // 创建轨道容器
                const orbitContainer = new THREE.Object3D();
                universeScene.add(orbitContainer);
                
                // 随机初始位置
                const angle = Math.random() * Math.PI * 2;
                planet.position.x = Math.cos(angle) * orbitRadii[i];
                planet.position.z = Math.sin(angle) * orbitRadii[i];
                
                // 随机倾斜
                planet.rotation.x = Math.random() * 0.5;
                
                orbitContainer.add(planet);
                
                // 创建可视化轨道
                const orbitGeometry = new THREE.RingGeometry(orbitRadii[i] - 0.1, orbitRadii[i] + 0.1, 64);
                const orbitMaterial = new THREE.MeshBasicMaterial({ 
                    color: 0xffffff, 
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 0.2
                });
                const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
                orbit.rotation.x = Math.PI / 2;
                universeScene.add(orbit);
                
                // 添加到行星数组
                planets.push({
                    planet: orbitContainer,
                    speed: orbitSpeeds[i]
                });
                
                // 某些行星添加卫星
                if (i > 1) {
                    const moonSize = planetSizes[i] * 0.3;
                    const moonGeometry = new THREE.SphereGeometry(moonSize, 16, 16);
                    const moonMaterial = new THREE.MeshPhongMaterial({ 
                        color: 0xcccccc,
                        shininess: 30
                    });
                    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
                    
                    // 创建卫星容器
                    const moonContainer = new THREE.Object3D();
                    planet.add(moonContainer);
                    
                    // 设置卫星位置
                    moon.position.x = planetSizes[i] * 2.5;
                    moonContainer.add(moon);
                    
                    // 添加月球轨道
                    const moonOrbitGeometry = new THREE.RingGeometry(
                        planetSizes[i] * 2.4, 
                        planetSizes[i] * 2.6, 
                        32
                    );
                    const moonOrbitMaterial = new THREE.MeshBasicMaterial({ 
                        color: 0xffffff, 
                        side: THREE.DoubleSide,
                        transparent: true,
                        opacity: 0.1
                    });
                    const moonOrbit = new THREE.Mesh(moonOrbitGeometry, moonOrbitMaterial);
                    moonOrbit.rotation.x = Math.PI / 2;
                    planet.add(moonOrbit);
                    
                    // 添加到行星数组
                    planets.push({
                        planet: moonContainer,
                        speed: 0.05,
                        isMoon: true
                    });
                }
            }
        }
        
        // 宇宙动画
        function animateUniverse() {
            requestAnimationFrame(animateUniverse);
            
            // 更新星星
            stars.forEach(star => {
                star.rotation.x += star.userData.rotationSpeed;
                star.rotation.y += star.userData.rotationSpeed;
                
                // 脉冲效果
                const pulse = Math.sin(Date.now() * star.userData.pulseSpeed + star.userData.pulseOffset) * 0.5 + 1;
                star.scale.set(pulse, pulse, pulse);
            });
            
            // 更新行星
            planets.forEach(planetObj => {
                planetObj.planet.rotation.y += planetObj.speed;
            });
            
            // 渲染场景
            universeRenderer.render(universeScene, universeCamera);
        }
        
        // 魔方交互 - 适用于电脑和移动设备
        
        // 点击/触摸事件 - 改进后的处理逻辑
        cubeWrapper.addEventListener('click', (e) => {
            if (!isDragging) {
                // 检查是否是面的点击事件被冒泡上来的
                if (e.target !== cubeWrapper && !e.target.classList.contains('universe-container')) {
                    return; // 如果是魔方面的点击事件，则不处理
                }
                
                // 切换魔方展开/收起状态
                toggleCubeExpansion();
            }
        });
        
        // 桌面设备 - 鼠标进入/离开事件
        if (window.matchMedia("(min-width: 1024px)").matches) {
            cubeWrapper.addEventListener('mouseenter', () => {
                // 暂停自动旋转
                autoRotate = false;
                
                // 添加展开类
                cubeWrapper.classList.add('expanded');
                cube.classList.add('expanded');
                isExpanded = true;
                
                // 创建小宇宙
                createUniverse();
            });
            
            cubeWrapper.addEventListener('mouseleave', () => {
                // 移除展开类
                cubeWrapper.classList.remove('expanded');
                cube.classList.remove('expanded');
                isExpanded = false;
                
                // 恢复自动旋转
                setTimeout(() => {
                    autoRotate = true;
                }, 1000);
            });
        }
        
        // 拖拽开始事件
        cubeWrapper.addEventListener('mousedown', (e) => {
            isDragging = true;
            lastX = e.clientX;
            lastY = e.clientY;
            cubeWrapper.style.cursor = 'grabbing';
        });
        
        // 触摸开始事件 - 移动设备
        cubeWrapper.addEventListener('touchstart', (e) => {
            isDragging = true;
            lastX = e.touches[0].clientX;
            lastY = e.touches[0].clientY;
        });
        
        // 拖拽移动事件
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            // 暂停自动旋转
            autoRotate = false;
            
            // 计算拖拽距离
            const deltaX = e.clientX - lastX;
            const deltaY = e.clientY - lastY;
            
            // 更新旋转角度
            rotateY += deltaX * 0.5;
            rotateX -= deltaY * 0.5;
            
            updateCubeRotation();
            
            lastX = e.clientX;
            lastY = e.clientY;
        });
        
        // 触摸移动事件 - 移动设备
        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            // 阻止页面滚动
            e.preventDefault();
            
            // 暂停自动旋转
            autoRotate = false;
            
            // 计算拖拽距离
            const deltaX = e.touches[0].clientX - lastX;
            const deltaY = e.touches[0].clientY - lastY;
            
            // 更新旋转角度
            rotateY += deltaX * 0.5;
            rotateX -= deltaY * 0.5;
            
            updateCubeRotation();
            
            lastX = e.touches[0].clientX;
            lastY = e.touches[0].clientY;
        }, { passive: false });
        
        // 拖拽结束事件
        document.addEventListener('mouseup', () => {
            isDragging = false;
            cubeWrapper.style.cursor = 'grab';
            
            // 拖拽结束后5秒恢复自动旋转
            setTimeout(() => {
                autoRotate = true;
            }, 5000);
        });
        
        // 触摸结束事件 - 移动设备
        document.addEventListener('touchend', () => {
            isDragging = false;
            
            // 触摸结束后5秒恢复自动旋转
            setTimeout(() => {
                if (!isExpanded) {  // 只有当魔方未展开时才恢复自动旋转
                    autoRotate = true;
                }
            }, 5000);
        });
        
        // 鼠标移出事件
        cubeWrapper.addEventListener('mouseleave', () => {
            isDragging = false;
            cubeWrapper.style.cursor = 'grab';
        });
        
        // 原来的点击事件 - 随机旋转到一个面 (仅当不是展开/收起操作时)
        cubeWrapper.addEventListener('click', (e) => {
            // 判断是否是直接点击了cubeWrapper而不是其子元素
            if (e.target === cubeWrapper) {
                return; // 不处理，因为这应该由toggleCubeExpansion函数处理
            }
            
            if (!isDragging) {
                // 随机选择旋转轴和角度
                const axes = ['X', 'Y', 'Z'];
                const axis = axes[Math.floor(Math.random() * axes.length)];
                const angle = Math.floor(Math.random() * 4) * 90; // 0, 90, 180, 270
                
                // 创建闪烁效果
                cube.classList.add('cube-flash');
                setTimeout(() => {
                    cube.classList.remove('cube-flash');
                }, 500);
                
                // 设置新的旋转角度
                if (axis === 'X') rotateX = angle;
                if (axis === 'Y') rotateY = angle;
                if (axis === 'Z') rotateZ = angle;
                
                // 使用GSAP动画平滑过渡
                if (typeof gsap !== 'undefined') {
                    gsap.to(cube, {
                        duration: 1,
                        ease: "power2.inOut",
                        onUpdate: updateCubeRotation
                    });
                } else {
                    updateCubeRotation();
                }
                
                // 暂停自动旋转
                autoRotate = false;
                
                // 3秒后恢复自动旋转
                setTimeout(() => {
                    if (!isExpanded) {  // 只有当魔方未展开时才恢复自动旋转
                        autoRotate = true;
                    }
                }, 3000);
            }
        });
        
        // 鼠标滚轮事件 - 控制Z轴旋转
        cubeWrapper.addEventListener('wheel', (e) => {
            e.preventDefault();
            
            rotateZ += e.deltaY > 0 ? 5 : -5;
            updateCubeRotation();
            
            // 暂停自动旋转
            autoRotate = false;
            
            // 3秒后恢复自动旋转
            setTimeout(() => {
                autoRotate = true;
            }, 3000);
        });
        
        // 为魔方面添加悬停效果
        cubeFaces.forEach((face) => {
            face.addEventListener('mouseenter', () => {
                // 为当前悬停的面添加放大效果
                face.classList.add('cube-face-hover');
                
                // 暂停自动旋转
                autoRotate = false;
            });
            
            face.addEventListener('mouseleave', () => {
                // 移除放大效果
                face.classList.remove('cube-face-hover');
                
                // 恢复自动旋转
                autoRotate = true;
            });
            
            // 面的点击事件
            face.addEventListener('click', (e) => {
                e.stopPropagation(); // 防止触发cube-wrapper的点击事件
                
                // 切换面的活跃状态
                face.classList.toggle('cube-face-active');
                
                // 如果面是活跃的，添加特殊效果
                if (face.classList.contains('cube-face-active')) {
                    // 添加脉冲动画
                    face.style.animation = 'pulse 1.5s infinite';
                } else {
                    // 移除脉冲动画
                    face.style.animation = '';
                }
            });
        });
        
        // 双击魔方重置旋转
        cubeWrapper.addEventListener('dblclick', () => {
            // 使用GSAP动画平滑过渡到初始状态
            if (typeof gsap !== 'undefined') {
                gsap.to(cube, {
                    duration: 1,
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0,
                    ease: "power2.inOut",
                    onUpdate: () => {
                        rotateX = 0;
                        rotateY = 0;
                        rotateZ = 0;
                        updateCubeRotation();
                    }
                });
            } else {
                rotateX = 0;
                rotateY = 0;
                rotateZ = 0;
                updateCubeRotation();
            }
            
            // 恢复自动旋转
            autoRotate = true;
            
            // 重置所有面的活跃状态
            cubeFaces.forEach((face) => {
                face.classList.remove('cube-face-active', 'cube-face-hover');
                face.style.animation = '';
            });
        });
        
        // 添加按键控制
        document.addEventListener('keydown', (e) => {
            // 只有当魔方在视野中时才响应按键
            const rect = cubeWrapper.getBoundingClientRect();
            const isVisible = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= window.innerHeight &&
                rect.right <= window.innerWidth
            );
            
            if (!isVisible) return;
            
            switch (e.key) {
                case 'ArrowUp':
                    rotateX -= 10;
                    break;
                case 'ArrowDown':
                    rotateX += 10;
                    break;
                case 'ArrowLeft':
                    rotateY -= 10;
                    break;
                case 'ArrowRight':
                    rotateY += 10;
                    break;
                case 'PageUp':
                    rotateZ -= 10;
                    break;
                case 'PageDown':
                    rotateZ += 10;
                    break;
                case ' ': // 空格键暂停/恢复自动旋转
                    autoRotate = !autoRotate;
                    break;
                case 'r': // r键重置旋转
                    rotateX = 0;
                    rotateY = 0;
                    rotateZ = 0;
                    break;
            }
            
            updateCubeRotation();
            
            // 暂停自动旋转（如果按的不是空格键）
            if (e.key !== ' ') {
                autoRotate = false;
                setTimeout(() => {
                    autoRotate = true;
                }, 3000);
            }
        });

        // 3D佛像模型加载与渲染
        const buddhaContainer = document.getElementById('buddha-container');
        if (buddhaContainer && typeof THREE !== 'undefined') {
            // 创建场景
            const scene = new THREE.Scene();
            
            // 创建相机
            const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            camera.position.z = 5;
            
            // 创建渲染器
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(300, 300);
            renderer.setClearColor(0x000000, 0);
            buddhaContainer.appendChild(renderer.domElement);
            
            // 添加光源
            const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
            scene.add(ambientLight);
            
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(1, 1, 1);
            scene.add(directionalLight);
            
            const pointLight = new THREE.PointLight(0xffd97f, 1, 100);
            pointLight.position.set(5, 5, 5);
            scene.add(pointLight);
            
            // 加载3D佛像模型
            const loader = new THREE.GLTFLoader();
            
            // 创建一个简单的佛像几何体作为加载失败的后备方案
            const fallbackGeometry = new THREE.SphereGeometry(1.5, 32, 32);
            const fallbackMaterial = new THREE.MeshPhongMaterial({ 
                color: 0xffd700,
                shininess: 30,
                emissive: 0x222222,
                specular: 0xffff00
            });
            const fallbackBuddha = new THREE.Mesh(fallbackGeometry, fallbackMaterial);
            
            try {
                // 尝试加载在线佛像模型
                loader.load(
                    'https://threejs.org/examples/models/gltf/LittlestTokyo.glb', // 替代URL，实际应使用佛像模型
                    (gltf) => {
                        // 调整模型大小和位置
                        const model = gltf.scene;
                        model.scale.set(0.05, 0.05, 0.05);
                        model.position.set(0, -1, 0);
                        model.rotation.y = Math.PI / 4;
                        scene.add(model);
                        
                        // 为模型添加发光效果
                        const glowMaterial = new THREE.MeshBasicMaterial({
                            color: 0xffd700,
                            transparent: true,
                            opacity: 0.2
                        });
                        
                        // 创建动画
                        const mixer = new THREE.AnimationMixer(model);
                        if (gltf.animations && gltf.animations.length) {
                            const action = mixer.clipAction(gltf.animations[0]);
                            action.play();
                        }
                        
                        // 在渲染循环中更新动画
                        const clock = new THREE.Clock();
                        function updateAnimation() {
                            const delta = clock.getDelta();
                            mixer.update(delta);
                        }
                        
                        // 替换渲染函数以包含动画更新
                        function animate() {
                            requestAnimationFrame(animate);
                            model.rotation.y += 0.005;
                            updateAnimation();
                            renderer.render(scene, camera);
                        }
                        
                        animate();
                    },
                    (xhr) => {
                        console.log(`${(xhr.loaded / xhr.total) * 100}% 加载中`);
                    },
                    (error) => {
                        console.error('模型加载失败:', error);
                        // 加载失败时使用后备方案
                        scene.add(fallbackBuddha);
                        
                        // 渲染后备球体并添加发光动画
                        function animateFallback() {
                            requestAnimationFrame(animateFallback);
                            fallbackBuddha.rotation.y += 0.01;
                            renderer.render(scene, camera);
                        }
                        
                        animateFallback();
                    }
                );
            } catch (e) {
                console.error('加载模型时发生错误:', e);
                // 使用后备方案
                scene.add(fallbackBuddha);
                
                // 渲染后备球体
                function animateFallback() {
                    requestAnimationFrame(animateFallback);
                    fallbackBuddha.rotation.y += 0.01;
                    renderer.render(scene, camera);
                }
                
                animateFallback();
            }
            
            // 添加佛像光环效果
            const haloGeometry = new THREE.RingGeometry(2.0, 2.5, 32);
            const haloMaterial = new THREE.MeshBasicMaterial({
                color: 0xffd700,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.5
            });
            const halo = new THREE.Mesh(haloGeometry, haloMaterial);
            halo.rotation.x = Math.PI / 2;
            scene.add(halo);
            
            // 基本渲染函数（如果没有加载模型）
            function animate() {
                requestAnimationFrame(animate);
                halo.rotation.z += 0.005;
                renderer.render(scene, camera);
            }
            
            animate();
            
            // 窗口大小变化时调整渲染器大小
            window.addEventListener('resize', () => {
                renderer.setSize(buddhaContainer.clientWidth, buddhaContainer.clientHeight);
            });
        }
    }
}); 