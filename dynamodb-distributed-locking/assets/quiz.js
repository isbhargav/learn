document.querySelectorAll("[data-quiz]").forEach((quiz) => {
  const feedback = quiz.querySelector(".feedback");
  const answers = [...quiz.querySelectorAll("[data-answer]")];

  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      const correct = answer.dataset.answer === "correct";
      answer.classList.add(correct ? "correct" : "incorrect");
      feedback.dataset.result = correct ? "correct" : "incorrect";
      feedback.textContent = correct
        ? quiz.dataset.correctFeedback
        : quiz.dataset.incorrectFeedback;

      if (correct) {
        answers.forEach((button) => { button.disabled = true; });
      }
    });
  });
});
