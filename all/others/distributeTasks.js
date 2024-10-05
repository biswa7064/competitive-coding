// Distribute tasks among nodes in this way that each node will get unique and equal tasks.
// In case of tasks.length===nodes then each node will get each task if the tasks are unique [2nd test case]
const distributeAndFindMaxTasks = (tasks, nodes) => {
  if (!(tasks.length || nodes)) return
  const count = {}
  for (const item of tasks) {
    count[item] ? (count[item] += 1) : (count[item] = 1)
  }
  console.log({ count })
  let tasksPerNode = 0
  for (const item of Object.values(count)) {
    tasksPerNode += Math.min(item, nodes)
    console.log({ tasksPerNode })
  }
  console.log({ tasksPerNode })
  return tasksPerNode
}

const test = {
  tasks: [3, 2, 2, 1, 3, 1, 3],
  nodes: 2,
}
/*output format  - 
-- first node: [3,2,1]
-- second node: [3,2,1]
-- max tasks distributes: 6
*/
const test1 = {
  tasks: [1, 3, 2],
  nodes: 3,
}
/*output format  - 
-- first node: [1]
-- second node: [3]
-- third node: [2]
-- max tasks distributes: 3
*/

console.log(
  "test:After distributing tasks for each node maxTask distributed",
  distributeAndFindMaxTasks(test.tasks, test.nodes)
)
console.log(
  "test1:After distributing tasks for each node maxTask distributed",
  distributeAndFindMaxTasks(test1.tasks, test1.nodes)
)
