const darkMode = false;

const themeData = {
    palette: {
        background: {
            paper: darkMode ? '#4d4d4d' : '#ffffff',
            default: darkMode ? '#555555' : '#f2f2f2'
        },
        primary: {
            light: '#33c9dc',
            main: darkMode ? '#444444' : '#00bcd4',
            dark: '#008394',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff6333',
            main: '#ffffff',
            dark: '#b22a00',
            contrastText: '#fff'
        },
        type: darkMode ? 'dark' : 'light' 
    }, 
    styles: {
        postTitle: {
            margin: '10px auto 10px auto'
        },
        postTime: {
            position: 'absolute',
            marginBottom: '0px'
        },
        posterDisplay: {
            margin: '1px 1px 50px 1px'
        },
        posterDisplayChild: {
            float: 'left',
            margin: 'auto 10px auto auto',
            verticalAlign: 'top'
        },
        posterDisplayChildTextTop: {
            marginTop: '-6px',
            marginBottom: '-7px'
        },
        forumDisplayList: {
            textTransform: 'none', 
            width: '350px'
        },
        postForum: {
            float: 'right'
        },
        imageSmall: {
            width: 30,
            height: 30,
            margin: 'auto 10px auto auto'
        },
        typography: {
            useNextVariants: true,
        },
        form: {
            textAlign: 'centre'
        },
        card: {
            display: 'flex',
            marginBottom: 20,
            position: 'relative'
        },
        cardSideCol: {
            
        },
        content: {
            padding: '25px 25px 5px 25px',
            width: '90%'
        },
        image: {
            width: 100,
            height: 100,
            margin: '20px auto 20px auto'
        },
        button: {
            marginTop: 20,
            position: 'relative'
        },
        customError: {
            color: 'red',
            fontSize:'0.8rem'
        },
        pageTitle: {
            margin: '10px auto 10px auto'
        },
        textField: {
            margin: '10px auto 10px auto'
        },
        progress: {
            position: 'absolute',
            margin: 'auto 30px auto 50px'
        },
        list: {
            width: '200px',
        },
        listItem: {
            float: 'left',
            margin: 'auto 10px auto auto',
            verticalAlign: 'top'
        },
        forumHeader: {
            margin: 'auto auto auto 20px'
        },
        forumGrid: {
            marginLeft: 'auto'
        },
        commentTime: {
            position: 'absolute',
            marginBottom: '0px'
        },
        commenterDisplay: {
            margin: '1px 1px 40px 1px'
        },
        commenterDisplayChild: {
            float: 'left',
            margin: 'auto 10px auto auto',
            verticalAlign: 'top'
        },
        comment: {
            width: '90%',
        },
        commentList: {
            float: 'left',
            margin: '0px auto 0px auto',
            verticalAlign: 'top'
        },
        commentVotes: {
            display: 'flex',
            textAlign: 'center',
            flexDirection: 'row'
        },
        commentVotesNumber: {
            paddingTop: '5px'
        },
        submitButton: {
            position: 'relative',
            float: 'right',
            marginTop: '5%'
        },
        closeButton: {
            position: 'absolute',
            left: '90%',
            top: '3%'
        },
        commentForm: {
            width: '80%',
            position: 'relative',
            margin: '10px auto 10px auto'
        },
        commentAvatar: {
            position: 'absolute',
            left: '3.5%',
            top: '35%'
        }
    }
};

export default themeData;