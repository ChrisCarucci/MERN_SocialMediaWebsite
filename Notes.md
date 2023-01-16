****TO DO****

- Disable adding self as friend
- Fix lightmode/darkmode select colors
- Add remove post option
- Add notifications
- Add Search functionality for search bar
- Fix Colors
- Allow editing of LinkeIn + Twitter Links from user if page owner
- Allow editing/posting comments
- Allow adding audio, attachments, gif
- Allow send /receive messages/add/delete
- Allow post-share functionality.
- Create 'liked' posts button to view 'liked' posts





*****Theme****

It is *extraordinarily* better to set your theme up before coding.
Use an easy naming convention for the theme object.
Such as:
    const nuetralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.bacground.alt;

You can easily change it as well as read it.
Super easy. Super nice. Very Niiice. ;)

******Mongoose******

// You want to import 
mongoose from "mongoose";

// Then you want too create the schema
const UserSchema = new mongoose.Schema( {

} );

// Then you want to create a const to hold the schema
const User = mongoose.model("User", UserSchema)


// Then export it
export default User;


******Verifying Token*******

// The token is stored in the header.
let token - req.header("Authorization)

// Slice the token from the header.
token = token.slice(7, token.length).trimLeft();



*****Material UI******
Material UI has a property called Box that allows you to pass in CSS properties
as component propertoes.

import { Box } from "@mui/material"


*****CSS******
objectFit: "Cover" -> Fills the space provided and crops where needed.
borderRadius: "50%" -> Creates a cropped circl around img.
