import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

export default async function( eleventyConfig ) {
	eleventyConfig.setTemplateFormats( 'html,md,liquid' );
	eleventyConfig.addGlobalData( 'layout', 'layouts/simplecss.html' );

	eleventyConfig.addPassthroughCopy( './src/assets' );
	eleventyConfig.addPassthroughCopy( './src/robots.txt' );
	eleventyConfig.addPassthroughCopy( './src/favicon.ico' );
	eleventyConfig.addPassthroughCopy( './src/tailwind.css' );


	eleventyConfig.setLibrary( 'md', markdownIt( {
			html: true,
			breaks: true,
			linkify: true
	} ) );

	eleventyConfig.amendLibrary( 'md', ( mdLib ) => mdLib.use( markdownIt ) );
	eleventyConfig.amendLibrary( 'md', ( mdLib ) => mdLib.use( markdownItAttrs ) );
};
