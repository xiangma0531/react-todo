# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

SAMPLE_TODOS = [
  {
    title: 'Reactの勉強をする',
  },
  {
    title: 'Railsの勉強をする',
  },
  {
    title: 'AWSの勉強をする',
  },
]

SAMPLE_TODOS.each do |todo|
  Todo.create(todo)
end
