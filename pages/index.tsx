import React from 'react'
import Typed, { TypedOptions } from 'typed.js'
import { Grid, IconButton, Hidden } from '@material-ui/core'
import Layout from '../components/Layout'
import styles from '../styling/styles'

const IndexPage: React.FC = () => {
	const paragraphRef = React.useRef<HTMLParagraphElement>(null)
	const paragraph2Ref = React.useRef<HTMLParagraphElement>(null)
	const cl = styles()

	React.useEffect(() => {
		const options: TypedOptions = {
			strings: ["HI! I'M MAXYM RYBAK"],
			typeSpeed: 50,
			startDelay: 1500,
			showCursor: false,
		}
		if (paragraphRef.current) {
			new Typed(paragraphRef.current?.tagName, options)
		}
		const options2: TypedOptions = {
			strings: ['FULL-STACK WEB DEVELOPER'],
			typeSpeed: 50,
			startDelay: 3000,
			showCursor: false,
		}
		if (paragraph2Ref.current) {
			new Typed(paragraph2Ref.current?.tagName, options2)
		}
	}, [])

	return (
		<Layout title='Maxym Rybak personal page'>
			<img src='/images/background.jpg' className={cl.fullScreanImg}></img>
			<div className={cl.backdrop} />
			<Hidden xsDown>
				<div className={cl.leftFrame} />
				<div className={cl.triangle} />
			</Hidden>
			<Grid container>
				<Grid item xs={12} sm={6} className={cl.leftFrameContent}>
					<Grid container spacing={1}>
						<Grid item xs={6} sm={6} style={{ padding: '1em' }}>
							<img src='/images/me.png' className={cl.photo}></img>
						</Grid>
						<Grid item xs={6} sm={6}>
							<div className={cl.greeting}>
								<span ref={paragraphRef} id='typed-text2'></span>
								<p ref={paragraph2Ref} id='typed-text2'></p>
							</div>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={6} className={cl.socialLinks}>
					<IconButton href='https://github.com/maxym-rybak' target='_blank' className={cl.sociaLinksItem}>
						<img src='/images/github.svg'></img>
					</IconButton>
					<IconButton href='https://www.facebook.com/hurubashi/' target='_blank' className={cl.sociaLinksItem}>
						<img src='/images/facebook.svg'></img>
					</IconButton>
					<IconButton
						href='https://www.linkedin.com/in/maxym-rybak-ba05b7162/'
						target='_blank'
						className={cl.sociaLinksItem}>
						<img src='/images/linkedin.svg'></img>
					</IconButton>
				</Grid>
			</Grid>
		</Layout>
	)
}

export default IndexPage
