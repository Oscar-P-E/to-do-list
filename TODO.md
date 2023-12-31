# TODO:

## Not Done:

### Future: (add these over time after completing The Odin Project)

-   Improve the look of the app
-   Add animations (Theo's youtube video)
-   Create some kind of default sort and possibly a sort button
-   Drag and drop functionality for reordering todos and projects, possibly moving them to different areas/projects/views/etc.
    -   If too hard, look into adding a sort button for sorting by due date, priority, etc.
-   Look into adding checklists to todos
-   Look into adding search functionality
    -   Look into adding dark mode toggle
-   Look into alerts for a set time

## Done and committed:

-   Setup boilerplate, github repo, webpack, eslint, prettier, .gitignore
-   First draft of styles.css
-   Convert project to typescript
-   Create Todo class
-   Write Jest test for Todo
-   Fix Jest setup and fix all the settings messed up after switching to ts
-   Split classes into separate modules
-   Create modules and test for Area and Project
-   Create html elements
-   Fix configs for TS again
-   Move and write all data and crud handlers to monolith.ts
-   Create domStuff.ts for DOM stuff
-   Add get functions for items
-   Make DOM stuff into function buildDOM and export/import to index.ts
-   Many bug fixes
-   Populate display (somewhat), reorganise dom stuff
-   More structural styling
-   Add Inbox to dom stuff
-   Style side area
-   Add classes common to multiple elements
-   Add inInbox property and make it false if hasStartDateTime
-   Add more draw functions (incomplete)
-   Change how getTodosAndProjects and getAllItems work
-   Fix functionality of displaying items that start today or earlier
-   Add draw scheduled function
-   Rename startDateTime to startDate (don't want time)
-   Make startDate get start of day from the due datetime (00:00 of the due datetime)
-   Change counter padding to view column gap
-   Add lots of dummy data
-   Fix many bugs
-   Change due becoming start date to only happen if due today
-   Fix Unscheduled
-   Add drawArchive
-   Cleanup comments
-   Rename archive to archived everywhere
-   Rename archived to logbook
-   Add drawAreaAsMain(area) function
-   Add drawProjectAsMain(project) function
-   Add counter to inbox
-   Rewrite all functions to use a filter and a forEach putItemOnMain fun…
-   Add a getToday function to monolith, add counter to Today
-   Improve main area styling
-   Add event listeners that run draw functions to the static side area views
-   Add event listener for side area projects and areas
-   Add another div to side areas, make stuff bigger in css
-   Make this TODO.md
-   Make inInbox false for todos created with parent
-   Make separate function to put stuff on item, separate from other steps
-   Make it so that (on creation not modification) any item with a parent is not in the inbox
-   Add checkbox to todos and projects for marking as done
-   Make it so that any isDone only shows in the logbook, and cleanup unneeded if-elses
-   Add date-fns to project
-   Convert all dates of type number to type Date
-   Change dueDateTime to dueDate
-   Simplify: Make items with a parent or start date just not be in the inbox.
-   Add display of due date if exists, in relative formatting
-   Add a flag emoji to due date
-   Add display of priority if marked
-   Reorganise code into separate files and folders
-   Add parent display to main area items
-   Add icon that shows item has notes
-   Make app use default cursor to look less like a website
-   Clicking on a project will open it in the main area view
-   Make these elements and add event listeners for the following:
    -   Clicking on a todo should expand it to show its details
    -   Expanded todo should have:
        -   Notes
        -   Start date
        -   Priority button
        -   Delete button
        -   Projects/Areas button
    -   Clicking on an expanded todo should edit what is clicked on
    -   Clicking outside of an expanded todo should collapse it
-   Add button for creating new todos in main area
-   New todos should be added to the inbox,
    -   or today if in today view
    -   or under parent project/area if in a project's/area's view (and marked as not in inbox)
-   Add buttons for creating new areas and projects in side area
-   Make a delete button for proj/areas
-   Make a backend for saving data
-   Add create project/area button
-   Make checkboxes functional
-   Add change parent functionality for projects
-   Fix combo btn hiding when cursor hits gap between
-   Make rename project/area also refresh the main area
-   Make projects only able to be children of areas
-   Make it so only todos are shown in main area
-   Fix bugs from making only todos show in main area
-   Make it so that projects can be marked as completed
-   Make marking project as completed also mark all children as completed

## Done but not committed:

-   Clean up code and submit project
