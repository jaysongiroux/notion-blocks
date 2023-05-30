export interface ChildPageProps {
	childPageBlock: {};
	childPageClick: ({
		childPageID,
		childPageTitle,
	}: {
		childPageID: string;
		childPageTitle: string;
	}) => void;
}
