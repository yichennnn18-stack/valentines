# 💕 Valentine's Day Website

A romantic, mobile-friendly website to ask your girlfriend to be your Valentine!

## Features
- 📱 Mobile-responsive design
- 💘 Interactive yes/no buttons (no button tries to escape!)
- 🎉 Celebration page with confetti animation
- 🖼️ Photo gallery support
- 💕 Falling hearts animation
- 🎨 Beautiful gradient design

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Photos
Place your photos in the `public/images/` folder:
- `photo1.jpg` - Your couple photo (shown on the proposal page)
- `photo2.jpg` - A happy photo (shown on the celebration page)

The site will automatically use these images if available.

### 3. Run the Server
```bash
npm start
```

The website will be available at: `http://localhost:3000`

### 4. Deploy
To deploy to the internet, consider using:
- Heroku
- Vercel
- Railway
- Render

You can then share the link with your girlfriend!

## File Structure
```
valentines/
├── app.js                 # Express server
├── package.json          # Dependencies
├── views/
│   ├── index.ejs        # Proposal page
│   └── yes.ejs          # Celebration page
└── public/
    ├── css/
    │   └── style.css    # All styling
    └── images/
        ├── photo1.jpg   # Couple photo
        └── photo2.jpg   # Happy photo
```

## Customization

You can customize the messages by editing the `.ejs` files:
- `views/index.ejs` - Change the proposal message
- `views/yes.ejs` - Change the celebration message

## Tips
- The "No" button is interactive and moves away on hover (works on both desktop and mobile)
- The site uses gradient backgrounds and animations for a romantic feel
- All styling is mobile-responsive for phone viewing

Enjoy! 💕
