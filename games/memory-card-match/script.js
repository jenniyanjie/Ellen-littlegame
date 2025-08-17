// 中文拼音学习内容
const chineseLessons = [
    {
        week: 1,
        date: "2025-08-05", 
        title: "2025-08-05：情感与物品",
        vocabulary: [
            { pinyin: 'xiào', zh: '笑' },
            { pinyin: 'kū le', zh: '哭了' },
            { pinyin: 'liù běn shū', zh: '六本书' },
            { pinyin: 'kū', zh: '哭' },
            { pinyin: 'hé mǎ', zh: '河马' }
        ]
    },
    {
        week: 2,
        date: "2025-08-12",
        title: "2025-08-12：动作与交际", 
        vocabulary: [
            { pinyin: 'pǎo bù', zh: '跑步' },
            { pinyin: 'qǐng zuò', zh: '请坐' },
            { pinyin: 'qī gè péng yǒu', zh: '七个朋友' },
            { pinyin: 'jǔ', zh: '举' },
            { pinyin: 'mǔ jī', zh: '母鸡' }
        ]
    },
    {
        week: 3,
        date: "2025-08-19",
        title: "2025-08-19：生活与情绪",
        vocabulary: [
            { pinyin: 'dǎ sǎo', zh: '打扫' },
            { pinyin: 'kuài lè', zh: '快乐' },
            { pinyin: 'bā tiáo yú', zh: '八条鱼' },
            { pinyin: 'qí', zh: '骑' },
            { pinyin: 'xǐ yī', zh: '洗衣' }
        ]
    },
    {
        week: 4,
        date: "2025-08-26",
        title: "2025-08-26：沟通与学习",
        vocabulary: [
            { pinyin: 'sòng xìn', zh: '送信' },
            { pinyin: 'shuí de', zh: '谁的' },
            { pinyin: 'jiǔ zhī bǐ', zh: '九支笔' },
            { pinyin: 'chá', zh: '茶' },
            { pinyin: 'zhī zhū', zh: '蜘蛛' }
        ]
    },
    {
        week: 5,
        date: "2025-09-02",
        title: "2025-09-02：意愿与事物",
        vocabulary: [
            { pinyin: 'dōu yào', zh: '都要' },
            { pinyin: 'xiǎng yào', zh: '想要' },
            { pinyin: 'shí bǎ chǐ', zh: '十把尺' },
            { pinyin: 'shé', zh: '蛇' },
            { pinyin: 'shā fā', zh: '沙发' }
        ]
    }
];

// 英文词汇学习内容
const englishLessons = [
    {
        week: 1,
        date: "2025-08-07",
        title: "2025-08-07：基础词汇一",
        vocabulary: [
            { en: 'boy', zh: '男孩' },
            { en: 'next', zh: '下一个' },
            { en: 'our', zh: '我们的' },
            { en: 'friends', zh: '朋友们' },
            { en: 'new', zh: '新的' }
        ]
    },
    {
        week: 2,
        date: "2025-08-07",
        title: "2025-08-07：基础词汇二", 
        vocabulary: [
            { en: 'car', zh: '汽车' },
            { en: 'far', zh: '远的' },
            { en: 'hair', zh: '头发' },
            { en: 'pair', zh: '一对' },
            { en: 'parents', zh: '父母' }
        ]
    },
    {
        week: 3,
        date: "2025-08-14",
        title: "2025-08-14：介词与动词一",
        vocabulary: [
            { en: 'under', zh: '在...下面' },
            { en: 'from', zh: '从...来' },
            { en: 'even', zh: '甚至' },
            { en: 'into', zh: '进入' },
            { en: 'through', zh: '穿过' }
        ]
    },
    {
        week: 4,
        date: "2025-08-14",
        title: "2025-08-14：介词与动词二",
        vocabulary: [
            { en: 'another', zh: '另一个' },
            { en: 'reef', zh: '礁石' },
            { en: 'seem', zh: '似乎' },
            { en: 'shark', zh: '鲨鱼' },
            { en: 'move', zh: '移动' }
        ]
    },
    {
        week: 5,
        date: "2025-08-21",
        title: "2025-08-21：形容词与动词一",
        vocabulary: [
            { en: 'clothes', zh: '衣服' },
            { en: 'asked', zh: '问过' },
            { en: 'fell', zh: '跌倒' },
            { en: 'bad', zh: '坏的' },
            { en: 'why', zh: '为什么' }
        ]
    },
    {
        week: 6,
        date: "2025-08-21",
        title: "2025-08-21：形容词与动词二",
        vocabulary: [
            { en: 'bright', zh: '明亮的' },
            { en: 'dim', zh: '暗的' },
            { en: 'road', zh: '道路' },
            { en: 'dirty', zh: '脏的' },
            { en: 'clean', zh: '干净的' }
        ]
    },
    {
        week: 7,
        date: "2025-08-28",
        title: "2025-08-28：时间与数字一",
        vocabulary: [
            { en: 'four', zh: '四' },
            { en: 'things', zh: '事情' },
            { en: 'blue', zh: '蓝色的' },
            { en: 'time', zh: '时间' },
            { en: 'about', zh: '关于' }
        ]
    },
    {
        week: 8,
        date: "2025-08-28",
        title: "2025-08-28：时间与数字二",
        vocabulary: [
            { en: 'timetable', zh: '时间表' },
            { en: 'first', zh: '第一' },
            { en: 'after', zh: '在...之后' },
            { en: 'half', zh: '一半' },
            { en: 'break', zh: '休息' }
        ]
    },
    {
        week: 9,
        date: "2025-09-04",
        title: "2025-09-04：日常表达一",
        vocabulary: [
            { en: 'so', zh: '所以' },
            { en: 'would', zh: '将会' },
            { en: 'better', zh: '更好的' },
            { en: 'way', zh: '方法' },
            { en: 'fun', zh: '有趣的' }
        ]
    },
    {
        week: 10,
        date: "2025-09-04",
        title: "2025-09-04：日常表达二",
        vocabulary: [
            { en: 'blow', zh: '吹' },
            { en: 'balloon', zh: '气球' },
            { en: 'slowly', zh: '慢慢地' },
            { en: 'push', zh: '推' },
            { en: 'should', zh: '应该' }
        ]
    }
];

// 当前学习模式：'chinese' 或 'english'
let currentMode = 'chinese';
let currentWeek = 1;
let vocabulary = chineseLessons[0].vocabulary;

const gameBoard = document.getElementById('game-board');
const matchesDisplay = document.getElementById('matches');
const totalPairsDisplay = document.getElementById('total-pairs');
const resetButton = document.getElementById('reset-button');
const confettiContainer = document.getElementById('confetti-container');
const weekSelect = document.getElementById('week-select');
const currentWeekTitle = document.getElementById('current-week-title');
const modeSelect = document.getElementById('mode-select');

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let lockBoard = false;

// 动态调整卡片字体大小
function adjustCardFontSize(cardSelector, defaultFontFamily = 'Arial', minSize = 8, maxSize = 30) {
    const cards = document.querySelectorAll(cardSelector);
    cards.forEach(card => {
        const text = card.textContent.trim();
        if (!text) return;
        
        const cardWidth = card.offsetWidth - 20; // 减去padding
        const cardHeight = card.offsetHeight - 20;
        
        // 跳过太小的卡片
        if (cardWidth <= 0 || cardHeight <= 0) return;
        
        // 获取当前样式
        const computedStyle = window.getComputedStyle(card);
        const fontFamily = computedStyle.fontFamily || defaultFontFamily;
        const fontWeight = computedStyle.fontWeight || 'normal';
        const fontStyle = computedStyle.fontStyle || 'normal';
        
        // 创建临时元素来测量文本宽度
        const tempElement = document.createElement('span');
        tempElement.style.visibility = 'hidden';
        tempElement.style.position = 'absolute';
        tempElement.style.whiteSpace = 'nowrap';
        tempElement.style.fontFamily = fontFamily;
        tempElement.style.fontWeight = fontWeight;
        tempElement.style.fontStyle = fontStyle;
        tempElement.textContent = text;
        document.body.appendChild(tempElement);
        
        // 二分法查找合适的字体大小
        let bestSize = minSize;
        let left = minSize;
        let right = maxSize;
        
        while (left <= right) {
            const midSize = Math.floor((left + right) / 2);
            tempElement.style.fontSize = midSize + 'px';
            
            const textWidth = tempElement.offsetWidth;
            const textHeight = tempElement.offsetHeight;
            
            if (textWidth <= cardWidth && textHeight <= cardHeight) {
                bestSize = midSize;
                left = midSize + 1;
            } else {
                right = midSize - 1;
            }
        }
        
        // 应用计算出的字体大小，但确保不超过原始CSS设置的最大值
        card.style.fontSize = bestSize + 'px';
        
        // 清理临时元素
        document.body.removeChild(tempElement);
    });
}

// 调整所有语言卡片的字体大小
function adjustAllCardFonts() {
    if (currentMode === 'chinese') {
        adjustCardFontSize('.card.pinyin .card-front', 'Courier New, monospace', 8, 24);
    } else {
        adjustCardFontSize('.card.en .card-front', 'Arial, sans-serif', 8, 24);
    }
}

// 切换学习模式
function switchMode(mode) {
    currentMode = mode;
    currentWeek = 1;
    updateWeekOptions();
    updateCurrentContent();
    initGame();
}

// 更新周次选择器选项
function updateWeekOptions() {
    const lessons = currentMode === 'chinese' ? chineseLessons : englishLessons;
    weekSelect.innerHTML = '';
    
    lessons.forEach(lesson => {
        const option = document.createElement('option');
        option.value = lesson.week;
        option.textContent = lesson.title;
        weekSelect.appendChild(option);
    });
    
    weekSelect.value = currentWeek;
}

// 更新当前学习内容
function updateCurrentContent() {
    const lessons = currentMode === 'chinese' ? chineseLessons : englishLessons;
    const selectedLesson = lessons.find(lesson => lesson.week === currentWeek);
    if (selectedLesson) {
        vocabulary = selectedLesson.vocabulary;
        currentWeekTitle.textContent = selectedLesson.title;
    }
}

// 切换学习周次
function switchWeek(weekNumber) {
    const lessons = currentMode === 'chinese' ? chineseLessons : englishLessons;
    const selectedLesson = lessons.find(lesson => lesson.week === parseInt(weekNumber));
    if (selectedLesson) {
        currentWeek = parseInt(weekNumber);
        vocabulary = selectedLesson.vocabulary;
        currentWeekTitle.textContent = selectedLesson.title;
        initGame();
    }
}

// 创建撒花效果
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'];
    const emojis = ['🎉', '🎊', '✨', '🌟', '💫', '🎈', '🎯', '🏆', '❤️', '💛', '💚', '💙', '💜'];
    
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        if (Math.random() > 0.5) {
            // 彩色几何形状
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            if (Math.random() > 0.7) {
                // 三角形
                confetti.style.width = '0';
                confetti.style.height = '0';
                confetti.style.backgroundColor = 'transparent';
                confetti.style.borderLeft = '5px solid transparent';
                confetti.style.borderRight = '5px solid transparent';
                confetti.style.borderBottom = `10px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
            }
        } else {
            // 表情符号
            confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confetti.style.fontSize = '12px';
            confetti.style.display = 'flex';
            confetti.style.alignItems = 'center';
            confetti.style.justifyContent = 'center';
        }
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

// 显示胜利消息
function showVictoryMessage() {
    const victoryMessage = document.createElement('div');
    victoryMessage.className = 'victory-message';
    victoryMessage.innerHTML = `
        <div>🎉 太棒了！🎉</div>
        <div style="font-size: 0.8em; margin-top: 10px;">所有配对都成功了！</div>
        <div style="font-size: 0.6em; margin-top: 15px; opacity: 0.9;">你的学习表现真棒😊！</div>
    `;
    
    document.body.appendChild(victoryMessage);
    
    // 3秒后自动移除消息
    setTimeout(() => {
        if (victoryMessage.parentNode) {
            victoryMessage.style.opacity = '0';
            victoryMessage.style.transform = 'translate(-50%, -50%) scale(0.8)';
            setTimeout(() => {
                if (victoryMessage.parentNode) {
                    victoryMessage.parentNode.removeChild(victoryMessage);
                }
            }, 300);
        }
    }, 3000);
}

// 初始化游戏
function initGame() {
    // 创建一个包含所有卡片内容的数组
    const cardContent = [];
    vocabulary.forEach(item => {
        if (currentMode === 'chinese') {
            // 中文拼音模式：拼音和中文配对
            cardContent.push({ value: item.pinyin, type: 'pinyin', matched: false });
            cardContent.push({ value: item.zh, type: 'zh', matched: false });
        } else {
            // 英文中文模式：英文和中文配对
            cardContent.push({ value: item.en, type: 'en', matched: false });
            cardContent.push({ value: item.zh, type: 'zh', matched: false });
        }
    });

    // 打乱卡片顺序
    cardContent.sort(() => 0.5 - Math.random());
    cards = cardContent;

    // 清空游戏板并创建新卡片
    gameBoard.innerHTML = '';
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', card.type);
        cardElement.dataset.index = index;
        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-back">?</div>
                <div class="card-front">${card.value}</div>
            </div>
        `;
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });

    // 更新信息显示
    matchedPairs = 0;
    matchesDisplay.textContent = matchedPairs;
    totalPairsDisplay.textContent = vocabulary.length;
    
    // 延迟调整字体大小，确保DOM已渲染
    setTimeout(() => {
        adjustAllCardFonts();
    }, 100);
}

// 翻转卡片
function flipCard(event) {
    if (lockBoard) return;
    const clickedCard = event.currentTarget;
    if (clickedCard.classList.contains('flipped') || flippedCards.length >= 2) return;

    clickedCard.classList.add('flipped');
    flippedCards.push(clickedCard);

    if (flippedCards.length === 2) {
        lockBoard = true;
        checkForMatch();
    }
}

// 检查是否配对成功
function checkForMatch() {
    const [card1, card2] = flippedCards;
    const index1 = card1.dataset.index;
    const index2 = card2.dataset.index;
    const content1 = cards[index1];
    const content2 = cards[index2];

    let isMatch = false;

    // 检查是否为配对
    if (content1.type !== content2.type) {
        const foundItem = vocabulary.find(item => {
            if (currentMode === 'chinese') {
                // 中文拼音模式：检查拼音和中文的配对
                return (content1.type === 'pinyin' && content1.value === item.pinyin && content2.value === item.zh) ||
                       (content2.type === 'pinyin' && content2.value === item.pinyin && content1.value === item.zh);
            } else {
                // 英文中文模式：检查英文和中文的配对
                return (content1.type === 'en' && content1.value === item.en && content2.value === item.zh) ||
                       (content2.type === 'en' && content2.value === item.en && content1.value === item.zh);
            }
        });
        isMatch = foundItem !== undefined;
    }

    if (isMatch) {
        matchedPairs++;
        matchesDisplay.textContent = matchedPairs;
        card1.classList.add('matched');
        card2.classList.add('matched');
        resetFlippedCards();
        checkGameEnd();
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            resetFlippedCards();
        }, 1000);
    }
}

// 重置翻转的卡片状态
function resetFlippedCards() {
    flippedCards = [];
    lockBoard = false;
}

// 检查游戏是否结束
function checkGameEnd() {
    if (matchedPairs === vocabulary.length) {
        setTimeout(() => {
            createConfetti();
            showVictoryMessage();
        }, 500);
    }
}

// 绑定重置按钮
resetButton.addEventListener('click', initGame);

// 绑定模式选择器
modeSelect.addEventListener('change', (event) => {
    switchMode(event.target.value);
});

// 绑定周次选择器
weekSelect.addEventListener('change', (event) => {
    switchWeek(event.target.value);
});

// 监听窗口大小改变，重新调整字体
window.addEventListener('resize', () => {
    setTimeout(() => {
        adjustAllCardFonts();
    }, 100);
});

// 首次加载页面时初始化游戏
updateWeekOptions();
initGame();