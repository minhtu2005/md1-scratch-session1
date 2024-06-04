
interface Feedback {
    id: number;
    name: string;
    score: number;
}

class FeedbackMenu {
    private feedbacks: Feedback[];
    private localStorageKey: string = "feedbacks";

    constructor() {
        this.feedbacks = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
        if (this.feedbacks.length === 0) {
        }
    }

    private saveToLocalStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.feedbacks));
    }

    public renderFeedback(): void {
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

    public createFeedback(name: string, score: number): void {
        const newFeedback: Feedback = {
            id: this.feedbacks.length > 0 ? this.feedbacks[this.feedbacks.length - 1].id + 1 : 1,
            name,
            score
        };
        this.feedbacks.push(newFeedback);
        this.saveToLocalStorage();
        this.renderFeedback();
    }

    public updateFeedback(id: number, name: string, score: number): void {
        const feedback = this.feedbacks.find(f => f.id === id);
        if (feedback) {
            feedback.name = name;
            feedback.score = score;
            this.saveToLocalStorage();
            this.renderFeedback();
        }
    }

    public deleteFeedback(id: number): void {
        this.feedbacks = this.feedbacks.filter(f => f.id !== id);
        this.saveToLocalStorage();
        this.renderFeedback();
    }
}

const feedbackMenu = new FeedbackMenu();
feedbackMenu.renderFeedback();
document.getElementById('send-btn')?.addEventListener('click', () => {
    const nameInput = <HTMLInputElement>document.getElementById('name-input');
    const scoreInput = <HTMLInputElement>document.getElementById('score-input');
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

