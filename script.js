// 문제와 선택지를 담을 배열
var questions = [
    {
        'question': '키워드 : 강호한정 ',
        'keywords': ['벼', '상춘곡', '성북동 비둘기', '광야'],
        'answer': '상춘곡'
    },
    {
        'question': '키워드 : 유년시절에 대한 그리움 ',
        'keywords': ['제망메가', '청산별곡', '젊은 아버지의 추억', '바람의 집 - 겨울판화'],
        'answer': '바람의 집 - 겨울판화'
    },
    {
        'question': '키워드 : 운명적 사랑',
        'keywords': ['모란이 피기까지는', '두근두근 내 인생', '푸른 밤', '가는 길'],
        'answer': '푸른 밤'
    },{
        'question': '키워드 : 가을 초목',
        'keywords': ['나무', '나목', '성에꽃', '씨앗을 받으며'],
        'answer': '씨앗을 받으며'
    },
    {
        'question': '키워드 : 거북이 ',
        'keywords': ['아버지와 치악산', '구지가', '독수리', '어부사시사'],
        'answer': '구지가'
    },{
        'question': '키워드 : 성리학 비판 ',
        'keywords': ['흥보가', '남한산성', '허생전', '만화 토지'],
        'answer': '허생전'
    }
    ,{
        'question': '키워드 : 도시 빈민의 절박함',
        'keywords': ['두 파산', '슬픔을 위하여', '세상에서 가장 아름다운 이별', '비 오는 날이면 가리봉동에 가야 한다'],
        'answer': '비 오는 날이면 가리봉동에 가야 한다'
    },
    {
        'question': '키워드 : 추상적 개념의 구체화',
        'keywords': ['사미인곡', '동짓달 기나긴 밤을', '태평천하', '정선 아리랑'],
        'answer': '동짓달 기나긴 밤을'
    },
    {
        'question': '키워드 : 금오신화',
        'keywords': ['봉산 탈춤', '어느 날 고궁을 나오면서', '너와 나만의 시간', '이생규장전'],
        'answer': '이생규장전'
    },
    {
        'question': '키워드 : 플라스틱 물건',
        'keywords': ['대장간의 유혹', '산도화', '로디지아발 기차', '산에 대하여'],
        'answer': '대장간의 유혹'
    }
];

// 문제 섞기
questions.sort(function() { return 0.5 - Math.random(); });

var currentQuestionIndex = 0;
var score = 0;

var questionElement = document.getElementById('question');
var choicesElement = document.getElementById('choices');
var submitButton = document.getElementById('submit');
var feedbackElement = document.getElementById('feedback');
var scoreElement = document.getElementById('score');

// 문제와 선택지를 화면에 표시하는 함수
function displayQuestion() {
    var question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;

    choicesElement.innerHTML = '';

    for (var i = 0; i < question.keywords.length; i++) {
        var li = document.createElement('li');
        li.textContent = question.keywords[i];
        choicesElement.appendChild(li);
    }
}

// 정답 체크 함수
function checkAnswer(event) {
    var selectedChoice = event.target;
    var answer = questions[currentQuestionIndex].answer;

    if (selectedChoice.textContent === answer) {
        score++;
        feedbackElement.textContent = '정답입니다!';
        feedbackElement.classList.add('correct');
        feedbackElement.classList.remove('incorrect');
    } else {
        feedbackElement.textContent = '틀렸습니다!';
        feedbackElement.classList.add('incorrect');
        feedbackElement.classList.remove('correct');
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showScore();
    }
}

// 점수 표시 함수
function showScore() {
    questionElement.style.display = 'none';
    choicesElement.style.display = 'none';
    submitButton.style.display = 'none';
    feedbackElement.style.display = 'none';
    scoreElement.textContent = '퀴즈가 종료되었습니다. 정답 개수: ' + score + '/' + questions.length;
}

// 이벤트 리스너 등록
choicesElement.addEventListener('click', checkAnswer);

// 초기 화면 설정
displayQuestion();
