const employee: {
  readonly id: number
  name: string
  retire: (date: Date) => void
} = {
  id: 1,
  name: "rahat",
  retire: (date) => {
    console.log(date)
  },
}
// employee.id = 12
employee.name = "mukta"
const today: Date = new Date()

console.log(employee.retire(today))
