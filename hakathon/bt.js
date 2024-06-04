class FeedbackMenu {
    constructor() {
        this.localStorageKey = "feedbacks";
        this.feedbacks = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
        if (this.feedbacks.length === 0) {
            
        }
    }
    saveToLocalStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.feedbacks));
    }
    renderFeedback() {
        const feedbackContainer = document.getElementById('feedback-container');
        if (feedbackContainer) {
            feedbackContainer.innerHTML = '';
            this.feedbacks.forEach(feedback => {
                feedbackContainer.innerHTML += `
                    <div class="feedback-item" data-id="${feedback.id}">
                        <p>Score: ${feedback.score}</p>
                        <p>${feedback.name}</p>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                `;
            });
        }
    }
    createFeedback(name, score) {
        const newFeedback = {
            id: this.feedbacks.length > 0 ? this.feedbacks[this.feedbacks.length - 1].id + 1 : 1,
            name,
            score
        };
        this.feedbacks.push(newFeedback);
        this.saveToLocalStorage();
        this.renderFeedback();
    }
    updateFeedback(id, name, score) {
        const feedback = this.feedbacks.find(f => f.id === id);
        if (feedback) {
            feedback.name = name;
            feedback.score = score;
            this.saveToLocalStorage();
            this.renderFeedback();
        }
    }
    deleteFeedback(id) {
        this.feedbacks = this.feedbacks.filter(f => f.id !== id);
        this.saveToLocalStorage();
        this.renderFeedback();
    }
}
const feedbackMenu = new FeedbackMenu();
feedbackMenu.renderFeedback();
document.getElementById('send-btn')?.addEventListener('click', () => {
    const nameInput = document.getElementById('name-input');
    const scoreInput = document.getElementById('score-input');
    if (nameInput && scoreInput) {
        const name = nameInput.value;
        const score = parseInt(scoreInput.value);
        if (name && score) {
            feedbackMenu.createFeedback(name, score);
            nameInput.value = '';
            scoreInput.value = '';
        }
    }
});
document.getElementById('feedback-container')?.addEventListener('click', (event) => {
    const target = event.target;
    const feedbackItem = target.closest('.feedback-item');
    if (feedbackItem) {
        const id = parseInt(feedbackItem.getAttribute('data-id') || '0');
        if (target.classList.contains('delete-btn')) {
            if (confirm('Are you sure you want to delete this feedback?')) {
                feedbackMenu.deleteFeedback(id);
            }
        }
        else if (target.classList.contains('edit-btn')) {
            const nameInput = document.getElementById('name-input');
            const scoreInput = document.getElementById('score-input');
            if (nameInput && scoreInput) {
                const feedback = feedbackMenu.feedbacks.find(f => f.id === id);
                if (feedback) {
                    nameInput.value = feedback.name;
                    scoreInput.value = feedback.score.toString();
                    const sendBtn = document.getElementById('send-btn');
                    if (sendBtn) {
                        sendBtn.textContent = 'Update';
                        sendBtn.addEventListener('click', () => {
                            feedbackMenu.updateFeedback(id, nameInput.value, parseInt(scoreInput.value));
                            nameInput.value = '';
                            scoreInput.value = '';
                            sendBtn.textContent = 'Send';
                        }, { once: true });
                    }
                }
            }
        }
    }
});