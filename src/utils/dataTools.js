import sprints from "../data/sprints.json";

export function loadSprint(id) {
    return sprints.filter(sprint => sprint.id == id)[0];
}