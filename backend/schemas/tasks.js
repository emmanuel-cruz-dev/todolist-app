const z = require("zod");

const taskSchema = z.object({
  title: z.string({
    invalid_type_error: "Task title must be a string.",
    required_error: "Task title is required.",
  }),
  completed: z
    .boolean({
      message: "Completed must be a boolean.",
    })
    .default(false),
});

function validateTask(object) {
  return taskSchema.safeParse(object);
}

function validatePartialTask(object) {
  return taskSchema.partial().safeParse(object);
}

module.exports = {
  validateTask,
  validatePartialTask,
};
