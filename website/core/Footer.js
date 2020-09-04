const React = require('react');

class Footer extends React.Component {
    docUrl(doc) {
        const baseUrl = this.props.config.baseUrl;
        const docsUrl = this.props.config.docsUrl;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        return `${baseUrl}${docsPart}${doc}`;
    }

    render() {
        return (
            <footer className="nav-footer" id="footer">
                <section className="sitemap">
                    <a href={this.props.config.baseUrl} className="nav-home">
                        {this.props.config.footerIcon && (
                            <img
                                src={
                                    this.props.config.baseUrl +
                                    this.props.config.footerIcon
                                }
                                alt={this.props.config.title}
                                width="66"
                                height="58"
                            />
                        )}
                    </a>
                    <div>
                        <h5>Docs</h5>
                        <a href={this.docUrl('doc1.html')}>
                            Very Important Links
                        </a>
                        <a href={this.docUrl('doc2.html')}>Documentation</a>
                    </div>
                    <div>
                        <h5>Reach Me Out</h5>
                        <a href="https://github.com/mmkvdev">Github</a>
                        <a
                            href="https://www.linkedin.com/in/madhu-kiran-varma-246a8514a/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://twitter.com/MadhuKiranVarm2"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Twitter
                        </a>
                    </div>
                    <div>
                        <h5>More</h5>
                        <a href="https://github.com/mmkvdev">GitHub</a>
                        <a
                            className="github-button"
                            href={this.props.config.repoUrl}
                            data-icon="octicon-star"
                            data-count-href="/facebook/docusaurus/stargazers"
                            data-show-count="true"
                            data-count-aria-label="# stargazers on GitHub"
                            aria-label="Star this project on GitHub"
                        >
                            Star
                        </a>
                        {this.props.config.twitterUsername && (
                            <div className="social">
                                <a
                                    href={`https://twitter.com/${this.props.config.twitterUsername}`}
                                    className="twitter-follow-button"
                                >
                                    Follow @{this.props.config.twitterUsername}
                                </a>
                            </div>
                        )}
                    </div>
                </section>

                <a
                    href="https://opensource.facebook.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="fbOpenSource"
                ></a>
                <section className="copyright">
                    {this.props.config.copyright}
                </section>
            </footer>
        );
    }
}

module.exports = Footer;
