interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Register on the application',
    'View list of available tools',
    'Rent a tool from a specific outlet',
    'Return the rented tool',
  ],
  ownerAbilities: [
    'Register Company in the application',
    'Manage multiple outlets',
    'Invite Admins to the application',
    'View rental history of each tool',
  ],
};
