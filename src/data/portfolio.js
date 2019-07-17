import MoveBytes from './../assets/images/MoveBytes.png'
import Goggins from './../assets/images/Goggins2.png'
import githubBattle from './../assets/images/githubBattle.png'
import LambdaNotes from './../assets/images/LambdaNotes.png'
import Subway from './../assets/images/Subway.png'

const data = [
  {
    title: 'MoveBytes',
    website: 'https://www.movebytes.com/',
    description: `Send files up to 2MB to recipients. Ensure they received them with email confirmation, and check if they've downloaded with view and download tracking.
    Built with React and Node, hosted on AWS.`,
    image: MoveBytes,
    github: 'https://github.com/Lambda-School-Labs/labs10-big-files',
  },
  {
    title: 'Github Battle',
    website: 'https://github-battle-86428.firebaseapp.com/',
    description: ` Github Battle is a React App that pulls data from the Github API to achieve multiple actions like Github Users Battle, Most Popular Repos and User Info`,
    image: githubBattle,
    github: 'https://github.com/cassidyjamesw/githubbattle',
  },
  {
    title: 'Note Taking App',
    website: 'https://cassidy-backendprojectweek.netlify.com/',
    description: ` Note Taking App built with React and Node, hosted on Heroku.`,
    image: LambdaNotes,
    github: 'https://github.com/cassidyjamesw/front-end-BEPW',
  },
  {
    title: 'Twitter Bot',
    website: 'https://twitter.com/QuotesGoggins',
    description: ` Twitter Bot that cycles through David Goggins Quotes. Built with Python.`,
    image: Goggins,
    github: 'https://github.com/cassidyjamesw/quotebot',
  },
  {
    title: 'NYC Rental Listing Data EDA',
    description: ` My goal with this project was to clean the NYC Rental Listing Data and to visualize relationships between rental price/interest and its proximity to Subways.`,
    image: Subway,
    github: 'https://github.com/cassidyjamesw/Project',
  },
]

export default data
