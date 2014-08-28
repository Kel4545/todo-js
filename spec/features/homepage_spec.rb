require 'rails_helper'

describe "Todos" do
  it "allows a user to do add todos", js: true do
    visit root_path

    expect(page).to have_content "Todoly"

    fill_in "todo", with: "feed kittens"
    click_button "Create Todo"

    within "#todos-list" do
       expect(page).to have_content "feed kittens"
    end
  end
end


#these tests don't know how to execute javascript, there's just an empty html
#page that it's trying to execute, not looking at js page


#selenium webdriver is why firefox comes up

#only turn this on for tests that need it, makes tests a lot slower
#Writing software that uses other software like a user would
