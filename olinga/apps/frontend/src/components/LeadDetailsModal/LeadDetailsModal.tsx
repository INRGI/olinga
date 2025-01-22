import { useState } from 'react';
import AdminModal from '../AdminModal';
import {
  CategoryDetailsContainer,
  ServicesBlockHeader,
} from '../CategoryAdmin/CategoryAdmin.styled';
import { Consultation } from '../../pages/AdminDashboard/ConsultatoinService';
import { Text, TextContainer } from './LeadDetailsModal.styled';

interface LeadDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: Consultation | null;
}

const LeadDetailsModal: React.FC<LeadDetailsModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [leadData, setLeadData] = useState<Consultation>(
    initialData || {
      _id: '',
      fullName: '',
      email: '',
      phone: '',
      date: '',
      status: '',
      createdAt: new Date(),
    }
  );

  return (
    <AdminModal isOpen={isOpen} onClose={onClose}>
      <CategoryDetailsContainer>
        <ServicesBlockHeader>
          <h2>Lead Details</h2>
        </ServicesBlockHeader>

        <TextContainer>
          <Text><span>Full Name:</span> {leadData.fullName}</Text>
          <Text><span>Email:</span> {leadData.email}</Text>
          <Text><span>Phone:</span> {leadData.phone}</Text>
          <Text><span>Created At:</span> { new Date(leadData.createdAt).toLocaleString()}</Text>
        </TextContainer>
      </CategoryDetailsContainer>
    </AdminModal>
  );
};

export default LeadDetailsModal;
