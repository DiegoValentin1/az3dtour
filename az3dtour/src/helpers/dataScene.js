const Scenes = {
    insideOne: {
        title: 'HACKATHON 1',
        image: '../images/1-panoramica_4060px.jpeg',
        pitch: -11,
        yaw: 50,
        hotSpots: [
            {
                id: 'teamA',
                type: 'info',
                pitch: -16.28,
                yaw: -1.66,
                text: 'Team A, teamA@astrazeneca.com, AZ IT Team A Support',
            },
            {
                id: 'teamB',
                type: 'info',
                pitch: -5,
                yaw: 60,
                text: 'Team B, teamB@astrazeneca.com, AZ IT Team B Support',
            },
            {
                id: 'img',
                type: 'custom',
                pitch: -15,
                yaw: 290,
                action: 'changeScene',
                targetScene: 'insideTwo',
            }
        ]
    },
    insideTwo: {
        title: 'HACKATHON 2',
        image: "../images/2-panoramica_4060px.jpeg",
        pitch: -11,
        yaw: 50,
        hotSpots: [
            {
                id: 'img',
                type: 'custom',
                pitch: -5,
                yaw: -250,
                action: 'changeScene',
                targetScene: 'insideTree',
            },

            {
                id: 'teamB',
                type: 'info',
                pitch: -5,
                yaw: -300,
                text: 'Team A, teamA@astrazeneca.com, AZ IT Team A Support',
            }
        ]
    },
    insideTree: {
        title: 'HACKATHON 3',
        image: "../images/3-panoramica_4060px.jpeg",
        pitch: -11,
        yaw: 50,
        hotSpots: [
            {
                id: 'img',
                type: 'custom',
                pitch: -5,
                yaw: -250,
                action: 'changeScene',
                targetScene: 'insideOne',
            },

            {
                id: 'teamB',
                type: 'info',
                pitch: -5,
                yaw: -300,
                text: 'Team A, teamA@astrazeneca.com, AZ IT Team A Support',
            }
        ]
    }
};

export default Scenes;
