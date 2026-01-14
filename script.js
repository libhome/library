document.addEventListener('DOMContentLoaded', () => {

    /* --- KDC Recommendation Logic --- */
    const bookData = {
        'literature': [
            { title: "구름빵", author: "백희나", color: "#FF9AA2" },
            { title: "마당을 나온 암탉", author: "황선미", color: "#FFB7B2" },
            { title: "강아지 똥", author: "권정생", color: "#FFDAC1" },
            { title: "만복이네 떡집", author: "김리리", color: "#E2F0CB" }
        ],
        'history': [
            { title: "한국사 편지", author: "박은봉", color: "#FFDAC1" },
            { title: "설민석의 한국사 대모험", author: "설민석", color: "#FF9AA2" },
            { title: "who? 위인전", author: "dasan", color: "#C7CEEA" },
            { title: "용선생 만화 한국사", author: "정상혁", color: "#B5EAD7" }
        ],
        'science': [
            { title: "Why? 우주", author: "예림당", color: "#B5EAD7" },
            { title: "신기한 스쿨버스", author: "조애너 콜", color: "#E2F0CB" },
            { title: "정재승의 인간탐구보고서", author: "정재승", color: "#FF9AA2" },
            { title: "내일은 실험왕", author: "곰돌이 co.", color: "#C7CEEA" }
        ],
        'society': [
            { title: "열두 살에 부자가 된 키라", author: "보도 섀퍼", color: "#C7CEEA" },
            { title: "어린이를 위한 정의란 무엇인가", author: "안미란", color: "#E0BBE4" },
            { title: "세금 내는 아이들", author: "옥효진", color: "#FFDAC1" },
            { title: "법 좀 아는 십대", author: "박인환", color: "#B5EAD7" }
        ],
        'art': [
            { title: "난중일기 (만화)", author: "이순신", color: "#E2F0CB" }, // Placeholder category fit
            { title: "오케스트라 악기 탐험", author: "음악쌤", color: "#C7CEEA" },
            { title: "반 고흐 아저씨", author: "미술샘", color: "#FF9AA2" },
            { title: "축구왕", author: "체육샘", color: "#FFDAC1" }
        ],
        'tech': [
            { title: "코딩맨", author: "송도수", color: "#E0BBE4" },
            { title: "로봇 친구 엔디", author: "미래과학", color: "#B5EAD7" },
            { title: "마인크래프트 가이드", author: "Mojang", color: "#E2F0CB" },
            { title: "인공지능이 뭐예요?", author: "AI박사", color: "#FF9AA2" }
        ]
    };

    const tabs = document.querySelectorAll('.kdc-tab');
    const bookDisplay = document.getElementById('book-display');

    function renderBooks(category) {
        bookDisplay.innerHTML = '';
        const books = bookData[category] || [];

        books.forEach((book, index) => {
            const card = document.createElement('div');
            card.classList.add('book-card');
            card.style.animationDelay = `${index * 0.1}s`;

            card.innerHTML = `
                <div class="book-cover" style="background-color: ${book.color};">
                    <i class="fa-solid fa-book"></i>
                </div>
                <div class="book-info">
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">${book.author}</div>
                    <span class="book-tag">대출 가능</span>
                </div>
            `;
            bookDisplay.appendChild(card);
        });
    }

    // Tab Click Event
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all
            tabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked
            tab.classList.add('active');

            const category = tab.dataset.category;
            renderBooks(category);
        });
    });

    // Initial Render (Literature)
    renderBooks('literature');


    /* --- Review Form Logic --- */
    const reviewForm = document.getElementById('reviewForm');
    const reviewList = document.getElementById('reviewList');
    const moodMap = { 'fun': '😆', 'moved': '🥺', 'scary': '😨', 'sad': '😭', 'good': '👍' };

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const bookTitle = document.getElementById('bookTitle').value;
        const userName = document.getElementById('userName').value;
        const reviewText = document.getElementById('reviewText').value;
        const moodValue = document.querySelector('input[name="mood"]:checked').value;

        if (!bookTitle || !userName || !reviewText) return;

        const newReview = document.createElement('div');
        newReview.classList.add('review-item');
        newReview.style.animation = 'fadeIn 0.5s';

        newReview.innerHTML = `
            <span class="mood-icon-small">${moodMap[moodValue]}</span>
            <div class="review-text-wrap">
                <span class="review-book">${bookTitle}</span>
                <span class="review-msg">"${reviewText}"</span>
            </div>
            <span class="review-author">by ${userName}</span>
        `;

        reviewList.insertBefore(newReview, reviewList.firstChild);
        reviewForm.reset();
    });
});
