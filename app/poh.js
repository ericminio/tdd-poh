var procedures = (name) => {
    let steps = {
        "test": [
            "start the clock",
            "pull?",
            "intention check",
            "identify sut",
            "identify related tests",
            "control check",
            "branch?",
            "choose pyramid level",
            "modify vs add",
            "choose an audience",
            "focus on behaviour",
            "go to red",
            "investigate surprises",
            "improve red message",
            "time check",
            "revert?",
            "back to refactor?",
            "commit?"
        ],
        "code": [
            "start the clock",
            "go to green",
            "magic number is ok",
            "duplication is ok",
            "conditional is ok",
            "whatever is ok",
            "time check",
            "revert?",
            "commit?"
        ],
        "refactor": [
            "start the clock",
            "control check",
            "own the code",
            "own the tests",
            "magic number?",
            "duplication?",
            "bad name?",
            "complexity?",
            "dead code?",
            "SOLID?",
            "DoD?",
            "time check",
            "revert?",
            "commit?",
            "glad?",
            "afraid?",
            "backlog update?"
        ]
    };
    return steps[name];
};
