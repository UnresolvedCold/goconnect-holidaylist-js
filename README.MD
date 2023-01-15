# Goconnect Calendar Export as ICS

This repository contains a small utility to export Goconnect holidays calendar in ICS format. Built on the top of https://github.com/nwcell/ics.js/ which is a very compact way of creating ICS calendars using js.

## How to use it

1. Copy the table that contains the goconnect calendar to the `html.html` file. 
2. Also Update the variable, `year` in `js.js` file.
3. After updating the file, simply open `html.html` file.
4. Click `Download ICS` to download the `ics` file.
5. You can now import the `ics` file to your calendar. 

## Outputs

> If you're not me, you can find the current calendar file inside the `outputs` directory.
>
> And if you're me, don't forget to update the README.MD with the latest `ics` file.

| Year | ICS File |
|--|--|
|2023| [calendar_2023.ics](/outputs/calendar_2023.ics) |

## Future Plans

* Update the script to download the ics file using inspection console. 