class TodosController < ApplicationController

  def index
    todos = Todo.all
    render json: todos
    # respond_to do |format|
    # format.json {render :json => @todos} when you want to respond to 2 different types html & json
  end

  def create
    todo = Todo.create(name: params["todo"]["name"])
    render json: todo
  end

  def delete
    Todo.destroy(params["id"])
  end
end

# It's set up this way in javascript