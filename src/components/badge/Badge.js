import classNames from 'classnames';

/**
 * Badge component
 *
 * @param label {string}
 * @param icon {JSX.Element | null}
 * @param rounded {boolean}
 * @param className {string}
 * @param props
 */
export const Badge = ( { label, icon: Icon = null, rounded = false, className = '', ...props } ) => {
	const classes = [
		className,
		'nfd-solutions-badge',
		{
			'nfd-solutions-badge--with-icon': !! Icon,
			'nfd-solutions-badge--rounded': rounded,
		},
	];

	return <span className={ classNames( classes ) } { ...props }>
	{ Icon && <Icon/> }
		{ label }
</span>;
}