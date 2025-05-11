const z = require("zod");

const taskSchema = z.object({
  title: z.string({
    invalid_type_error: "Task title must be a string.",
    required_error: "Task title is required.",
  }),
  completed: z.boolean({
    required_error: "Completed is required.",
    message: "Completed must be a boolean.",
  }),
});

function validateTask(object) {
  return taskSchema.safeParse(object);
}
module.exports = {
  validateTask,
};
