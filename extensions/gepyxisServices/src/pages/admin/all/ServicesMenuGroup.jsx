import { NavigationItemGroup } from '@components/admin/NavigationItemGroup';
import { _ } from '@evershop/evershop/lib/locale/translate/_';
import { List, ClipboardList } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';

export default function ServicesMenuGroup({ serviceGrid, quoteGrid }) {
  return (
    <NavigationItemGroup
      id="gepyxisServicesMenuGroup"
      name={_('Servicios')}
      items={[
        {
          Icon: List,
          url: serviceGrid,
          title: _('Lista de servicios')
        },
        {
          Icon: ClipboardList,
          url: quoteGrid,
          title: _('Cotizaciones')
        }
      ]}
    />
  );
}

ServicesMenuGroup.propTypes = {
  serviceGrid: PropTypes.string.isRequired,
  quoteGrid: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'adminMenu',
  sortOrder: 65
};

export const query = `
  query Query {
    serviceGrid: url(routeId: "serviceGrid")
    quoteGrid: url(routeId: "quoteGrid")
  }
`;