import styled from 'styled-components';
import flexHorizontal from '../../../../styles/mixins/flex-horizontal';
import uiList from '../../../../styles/mixins/ui-list';
import spaceChildrenH from '../../../../styles/mixins/space-children-h';

export default styled.nav`
  ${flexHorizontal};
  ${uiList};
  ${props => spaceChildrenH(props.theme.rhythm.hr(1.5))};
`;
